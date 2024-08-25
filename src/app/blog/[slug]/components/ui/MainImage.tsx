import Image from 'next/image'

export const MainImage = ({ image, width , height }: { image: string; width: number; height: number }) => (
  <Image width={width} height={height} loading="lazy" src={`/video/${image}.webp`} alt={`Фото ${image}`} className="my-0 select-none" />
)
