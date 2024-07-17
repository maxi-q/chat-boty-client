import { Manrope } from 'next/font/google'
import { TextCarousel, VideoCarousel } from './Carousel'
import styles from './style.module.css'

const nunitoFont = Manrope({
  // weight: '700',
  subsets: ['latin'],
  // variable: '--font-poppins',
})

export const FiveScreen = () => {
  return (
    <main className={`section bp-5 px-4 py-5 laptop:px-[40px] laptop:pt-[70px] pb-32 ${styles.screen}`}>
      <h1 className={`text-4xl laptop:text-5xl desktop:text-6xl ${styles.title}`}>отзывы:</h1>
      <VideoCarousel />
      <TextCarousel />
    </main>
  )
}
