import Image from 'next/image'

import VideoReviewPlayer from './../../../../../constants/svg/VideoReviewPlayer'
import styles from './style.module.css'
import { Card } from './ui/Card'

interface IVideoCard {
  onClick: (id: string, oid: string, horizontal: string) => void
  id: string
  oid: string
  vertical: string
  horizontal: string
}

export const VideoCard = ({ onClick, vertical, id, oid, horizontal }: IVideoCard) => {
  return (
    <Card onClick={() => onClick(id, oid, horizontal)} className={`!p-0 h-auto !w-auto cursor-pointer relative ${styles.cardVideo}`}>
      <VideoReviewPlayer className={`absolute ${styles.playerVideo}`}/>
      <Image src={`${vertical}`} alt={'видео отзыв'} height={640} width={360} />
    </Card>
  )
}
