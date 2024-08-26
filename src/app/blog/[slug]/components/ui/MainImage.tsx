import { SOURCE } from '@/constants/static'
import Image from 'next/image'

export const MainImage = ({ image, width, height }: { image: string; width: number; height: number }) => {
  return <Image width={width} height={height} loading="lazy" src={`${SOURCE.static_url}${image}?field=slug`} alt={`Фото ${image}`} className="my-0 select-none" />
}

export const CarouselImage = ({ image, width, height }: { image: string; width: number; height: number }) => {
  return (
    <Image
      width={width}
      height={height}
      loading="lazy"
      src={`${SOURCE.static_url}${image}?field=slug`}
      alt={`Фото ${image}`}
      className={`my-0 select-none max-w-full max-h-full relative object-contain block`}
      style={{ backgroundColor: 'var(--color-additional-2)', aspectRatio: `${width} / ${height}` }}
    />
  )
}
