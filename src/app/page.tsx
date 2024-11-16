import FirstScreen from '@/modules/landing/FirstScreen'

import dynamic from 'next/dynamic'

const SecondScreen = dynamic(() => import('@/modules/landing/SecondScreen'))
const ThirdScreen = dynamic(() => import('@/modules/landing/ThirdScreen'))
const FourScreen = dynamic(() => import('@/modules/landing/FourScreen'))
const FiveScreen = dynamic(() => import('@/modules/landing/FiveScreen'))
const SixScreen = dynamic(() => import('@/modules/landing/SixScreen'))
const SevenScreen = dynamic(() => import('@/modules/landing/SevenScreen'))

export default function Home() {
  return (
    <main className={'laptop:mx-[15px] scroll-smooth'}>
      <FirstScreen />
      <SecondScreen />
      <ThirdScreen />
      <FourScreen />
      <FiveScreen />
      <SixScreen />
      <SevenScreen />
    </main>
  )
}
