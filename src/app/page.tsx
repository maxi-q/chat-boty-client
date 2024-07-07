import { FirstScreen, FiveScreen, FourScreen, SecondScreen, SevenScreen, SixScreen, ThirdScreen } from '@/modules'
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
    </main>
  )
}
