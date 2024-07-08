
import { PopUp } from '@/components/ui/PopUp'
import { FirstScreen, FiveScreen, FourScreen, SecondScreen, SevenScreen, SixScreen, ThirdScreen } from '@/modules'
import { useState } from 'react'
import styles from './styles.module.css'

export default function Home() {

  return (
    <main className={styles.main + ''}>
      <FirstScreen />
      <SecondScreen />
      <ThirdScreen />
      <FourScreen />
      <FiveScreen />
      <SixScreen />
      <SevenScreen />
      <PopUp />
    </main>
  )
}
