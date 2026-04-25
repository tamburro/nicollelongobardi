import type { Metadata } from 'next'
import { Space_Grotesk, Noto_Sans } from 'next/font/google'
import './globals.css'

// Roobert PRO substitute — Space Grotesk is the closest free geometric
// alternative with similar proportions and OpenType feel
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
})

const notoSans = Noto_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Nicolle Longobardi',
  description: 'Produtora Cultural, Gestora de Projetos e Artista Docente no Rio de Janeiro.',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${spaceGrotesk.variable} ${notoSans.variable}`}>
      <body className="bg-white antialiased">
        {children}
      </body>
    </html>
  )
}
