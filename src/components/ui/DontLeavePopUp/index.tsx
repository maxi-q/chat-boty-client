'use client'

import { useDebounceCallback } from '@/constants/helpers'
import { useEffect, useRef, useState } from 'react'
import { create } from 'zustand'
import { CallToActionButton } from '../CallToAction'
import { WhitePopUp } from '../PopUp'
import styles from './style.module.css'

type callBackState = {
  leave: boolean
  entering: () => void
  leaving: () => void
}

export const useCallBackStore = create<callBackState>()((set) => ({
  leave: false,
  entering: () => set({ leave: false }),
  leaving: () => set({ leave: true }),
}))

export const NotLeavePopUp = () => {
  const { leave, entering, leaving } = useCallBackStore()

  const [show, setShow] = useState(false)
  const closePopup = () => setShow(false)
  const openPopup = () => setShow(true)

  useEffect(() => {
    document.body.addEventListener('mouseleave', leaving)
    document.body.addEventListener('mouseenter', entering)
  }, [])

  useEffect(() => {
    mouseMove(leave)
  }, [leave])

  const canOpen = useRef(true)

  const mouseMove = useDebounceCallback((leave: boolean) => {
    if (leave && canOpen.current) {
      openPopup()
      canOpen.current = false
    }
  }, 4000)

  return (
    <WhitePopUp className={`!pb-8 !p-[64px] ${styles.popup}`} show={show} onClickOverlay={closePopup}>
      <div key="second" className={`flex flex-col items-center tablet:w-[524px] text-center items-center`} >
        <h1 className={`text-4xl uppercase pb-3 ${styles.gratitudeTitle}`}>Не уходите с пустыми руками!</h1>
        <h3 className={`font-bold tracking-widest leading-5 uppercase text-base text-center ${styles.gratitudeSubtitle}`}>
          Получите бесплатно разбор воронки, которая окупилась в 10 раз
        </h3>
        <CallToActionButton onClick={() => {alert('ссылка на разбор')}} className={`${styles.cta} w-[298px] mt-6`} textClassName={'ps-0'}>
          Хочу разбор
        </CallToActionButton>
      </div>
    </WhitePopUp>
  )
}
