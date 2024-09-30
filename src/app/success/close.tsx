'use client'

import { useCallBackStore } from '@/components/ui/CallBackPopUp'
import { useEffect } from 'react'

export const Close = () => {
  const { closePopup } = useCallBackStore()
  useEffect(() => {
    closePopup()
  }, [])
  return <></>
}
