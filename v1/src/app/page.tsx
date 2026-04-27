 
import React from 'react'

import type { Metadata } from 'next'  
import Home from '@/components/home'
import Wrapper from '@/layouts/Wrapper'
export const metadata: Metadata = {
  title: 'Nicolle Longobardi — Produção Cultural & Gestão de Projetos',
  description: 'Nicolle Longobardi: Produtora Cultural, Gestora de Projetos, Artista-Docente e Coordenadora Educativa. Com formação em Artes Cênicas, experiência em produção executiva, eventos corporativos, projetos culturais e educação. Baseada no Rio de Janeiro, Brasil.',
}


export default function index() {
  return (
    <Wrapper>
     <Home /> 
    </Wrapper>
  )
}
