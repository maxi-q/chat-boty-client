import Image from 'next/image'
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
    <Card onClick={() => onClick(id, oid, horizontal)} className="!p-0 h-auto !w-auto">
      <Image src={`${vertical}`} alt={'видео отзыв'} height={640} width={360} />
    </Card>
  )
}
