'use client'

import { useEffect } from 'react'

export const MouseEventHandler = ({ onLeave, onEnter }: { onLeave: () => void; onEnter: () => void }) => {
  useEffect(() => {
    document.body.addEventListener('mouseleave', onLeave)
    document.body.addEventListener('mouseenter', onEnter)

    return () => {
      document.body.removeEventListener('mouseleave', onLeave)
      document.body.removeEventListener('mouseenter', onEnter)
    }
  }, [onLeave, onEnter])

  return null
}
