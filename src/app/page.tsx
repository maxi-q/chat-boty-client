
import { FirstScreen, FiveScreen, FourScreen, SecondScreen, SevenScreen, SixScreen, ThirdScreen } from '@/modules'

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
