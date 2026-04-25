'use client'

import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useCallback,
  type ReactNode,
  type CSSProperties,
} from 'react'
import Matter from 'matter-js'

/* ─── Types ─────────────────────────────────────────────── */
interface BodyOpts {
  x: string | number
  y: string | number
  angle?: number
  bodyOptions?: Matter.IBodyDefinition
}

interface GravityCtx {
  addBody: (el: HTMLElement, opts: BodyOpts) => void
  removeBody: (el: HTMLElement) => void
  containerRef: React.RefObject<HTMLDivElement | null>
}

export interface MatterBodyProps {
  matterBodyOptions?: Matter.IBodyDefinition
  x?: string | number
  y?: string | number
  angle?: number
  children: ReactNode
  className?: string
  style?: CSSProperties
}

export interface GravityProps {
  gravity?: { x: number; y: number }
  className?: string
  children: ReactNode
  style?: CSSProperties
}

/* ─── Context ───────────────────────────────────────────── */
const Ctx = createContext<GravityCtx>({
  addBody: () => {},
  removeBody: () => {},
  containerRef: { current: null },
})

/* ─── MatterBody ─────────────────────────────────────────── */
export function MatterBody({
  children,
  matterBodyOptions,
  x = '50%',
  y = '50%',
  angle = 0,
  className,
  style,
}: MatterBodyProps) {
  const { addBody, removeBody } = useContext(Ctx)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    addBody(el, { x, y, angle, bodyOptions: matterBodyOptions })
    return () => {
      if (el) removeBody(el)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div
      ref={ref}
      className={className}
      style={{ position: 'absolute', top: 0, left: 0, userSelect: 'none', ...style }}
    >
      {children}
    </div>
  )
}

/* ─── Gravity ────────────────────────────────────────────── */
export default function Gravity({
  gravity = { x: 0, y: 1 },
  className,
  children,
  style,
}: GravityProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const engineRef    = useRef<Matter.Engine | null>(null)
  const runnerRef    = useRef<Matter.Runner | null>(null)
  const rafRef       = useRef<number>(0)
  const wallsRef     = useRef<Matter.Body[]>([])
  const bodyMap      = useRef<Map<HTMLElement, Matter.Body>>(new Map())
  const pendingRef   = useRef<Array<{ el: HTMLElement; opts: BodyOpts }>>([])

  /* ── helpers ── */
  const parsePos = useCallback(
    (val: string | number, dimension: number) => {
      if (typeof val === 'string' && val.endsWith('%'))
        return (parseFloat(val) / 100) * dimension
      return parseFloat(val as string)
    },
    []
  )

  const makeWalls = useCallback(
    (engine: Matter.Engine, w: number, h: number) => {
      const T = 60
      const walls = [
        Matter.Bodies.rectangle(w / 2, h + T / 2, w * 3, T, { isStatic: true }),
        Matter.Bodies.rectangle(w / 2, -T / 2,    w * 3, T, { isStatic: true }),
        Matter.Bodies.rectangle(-T / 2,    h / 2, T, h * 3, { isStatic: true }),
        Matter.Bodies.rectangle(w + T / 2, h / 2, T, h * 3, { isStatic: true }),
      ]
      Matter.Composite.add(engine.world, walls)
      return walls
    },
    []
  )

  const addPhysicsBody = useCallback(
    (el: HTMLElement, opts: BodyOpts, engine: Matter.Engine) => {
      const container = containerRef.current
      if (!container) return
      const { width, height } = container.getBoundingClientRect()
      const elW = el.offsetWidth  || el.getBoundingClientRect().width
      const elH = el.offsetHeight || el.getBoundingClientRect().height

      const bx = parsePos(opts.x, width)
      const by = parsePos(opts.y, height)

      const bodyOptions: Matter.IChamferableBodyDefinition = {
        restitution: 0.3,
        friction: 0.5,
        frictionAir: 0.012,
        ...(opts.bodyOptions as Matter.IChamferableBodyDefinition),
        angle: ((opts.angle ?? 0) * Math.PI) / 180,
      }
      const body = Matter.Bodies.rectangle(bx, by, elW, elH, bodyOptions)

      Matter.Composite.add(engine.world, body)
      bodyMap.current.set(el, body)
    },
    [parsePos]
  )

  /* ── context callbacks ── */
  const addBody = useCallback(
    (el: HTMLElement, opts: BodyOpts) => {
      if (!engineRef.current) {
        pendingRef.current.push({ el, opts })
      } else {
        addPhysicsBody(el, opts, engineRef.current)
      }
    },
    [addPhysicsBody]
  )

  const removeBody = useCallback((el: HTMLElement) => {
    const body = bodyMap.current.get(el)
    if (body && engineRef.current) {
      Matter.Composite.remove(engineRef.current.world, body)
      bodyMap.current.delete(el)
    }
  }, [])

  /* ── main effect ── */
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const { width, height } = container.getBoundingClientRect()

    const engine = Matter.Engine.create({ gravity })
    engineRef.current = engine

    wallsRef.current = makeWalls(engine, width, height)

    /* mouse drag — remove wheel listeners so page scroll is not blocked */
    const mouse = Matter.Mouse.create(container)
    const mc    = Matter.MouseConstraint.create(engine, {
      mouse,
      constraint: { stiffness: 0.2, render: { visible: false } },
    })
    Matter.Composite.add(engine.world, mc)
    // Matter.js registers non-passive wheel listeners that call preventDefault,
    // blocking page scroll. Fix: remove then re-add as passive so preventDefault
    // is ignored by the browser and the page scrolls normally.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const mAny = mouse as any
    if (mAny.mousewheel) {
      mouse.element.removeEventListener('mousewheel',    mAny.mousewheel)
      mouse.element.removeEventListener('DOMMouseScroll', mAny.mousewheel)
      mouse.element.addEventListener('mousewheel',    mAny.mousewheel, { passive: true })
      mouse.element.addEventListener('DOMMouseScroll', mAny.mousewheel, { passive: true })
    }

    /* flush pending bodies */
    pendingRef.current.forEach(({ el, opts }) => addPhysicsBody(el, opts, engine))
    pendingRef.current = []

    /* runner */
    const runner = Matter.Runner.create()
    Matter.Runner.run(runner, engine)
    runnerRef.current = runner

    /* render loop — sync DOM to physics */
    const loop = () => {
      bodyMap.current.forEach((body, el) => {
        const { x, y } = body.position
        const w = el.offsetWidth
        const h = el.offsetHeight
        el.style.transform = `translate(${x - w / 2}px, ${y - h / 2}px) rotate(${body.angle}rad)`
      })
      rafRef.current = requestAnimationFrame(loop)
    }
    rafRef.current = requestAnimationFrame(loop)

    /* resize */
    const ro = new ResizeObserver(() => {
      if (!containerRef.current) return
      const { width: nw, height: nh } = containerRef.current.getBoundingClientRect()
      wallsRef.current.forEach(w => Matter.Composite.remove(engine.world, w))
      wallsRef.current = makeWalls(engine, nw, nh)
    })
    ro.observe(container)

    return () => {
      cancelAnimationFrame(rafRef.current)
      Matter.Runner.stop(runner)
      Matter.Engine.clear(engine)
      ro.disconnect()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Ctx.Provider value={{ addBody, removeBody, containerRef }}>
      <div
        ref={containerRef}
        className={className}
        style={{ position: 'relative', overflow: 'hidden', ...style }}
      >
        {children}
      </div>
    </Ctx.Provider>
  )
}
