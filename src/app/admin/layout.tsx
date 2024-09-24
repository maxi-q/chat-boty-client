'use client'

import { useEffect, useRef } from 'react'
import NavBreadcrumbs from './modules/NavBreadcrumbs'

export default function Admin({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])

  return (
    <main ref={sectionRef}>
      <NavBreadcrumbs/>
      {children}
    </main>
  )
}
