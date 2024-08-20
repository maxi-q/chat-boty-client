import { TextCarousel } from './modules/TextCarousel'
import { VideoCarousel } from './modules/VideoCarousel'
import styles from './style.module.css'

export const FiveScreen = () => {
  return (
    <main className={`section bp-5 px-4 py-5 laptop:px-[40px] laptop:pt-[70px] pb-3 tablet:pb-32 ${styles.screen}`}>
      <h1 className={`text-4xl laptop:text-5xl desktop:text-6xl ${styles.title}`}>отзывы:</h1>
      <VideoCarousel />
      <TextCarousel />
    </main>
  )
}
