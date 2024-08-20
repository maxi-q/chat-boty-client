import Image from 'next/image'

const IMAGES = ['horizontal', 'horizontal', 'horizontal', 'horizontal']

type ImageProps = {
  image: string
}

const ArticleImage: React.FC<ImageProps> = ({ image = IMAGES }) => {
  return (
    <div className="relative w-full h-max pb-[30px]">
      <div className="w-full h-max aspect-video rounded-xl overflow-hidden">
        <div className="relative flex h-full">
          <Image width={1600} height={900} loading='lazy' src={`/video/${image}.webp`} alt={`Фото ${image}`} className="my-0" />
        </div>
      </div>
    </div>
  )
}

export default ArticleImage
