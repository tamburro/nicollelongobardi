import React from 'react'
import type { Metadata } from 'next'
import Home from '@/components/home'
import Wrapper from '@/layouts/Wrapper'

export const metadata: Metadata = {
  title: 'Longobardi Produz — Produção Cultural & Gestão de Projetos',
  description: 'Produção de eventos corporativos, culturais e audiovisuais no Rio de Janeiro. Nicolle Longobardi — longobardiproduz@gmail.com',
}

export default function index() {
  return (
    <Wrapper>
      <Home />
    </Wrapper>
  )
}
