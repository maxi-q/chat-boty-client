import Image from 'next/image'

export const MainImage = ({image}: {image: string}) => <Image width={1600} height={900} loading='lazy' src={`/video/${image}.webp`} alt={`Фото ${image}`} className="my-0 select-none" />