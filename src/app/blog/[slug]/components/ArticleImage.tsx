import { MainImage } from './ui/MainImage'

const IMAGE = 'horizontal'

type ImageProps = {
  image: string
}

const ArticleImage: React.FC<ImageProps> = ({ image = IMAGE }) => {
  return (
    <div className="relative w-full h-max pb-[30px]">
      <div className="w-full h-max aspect-video rounded-xl overflow-hidden">
        <div className="relative flex h-full">
          <MainImage image={image} />
        </div>
      </div>
    </div>
  )
}

export default ArticleImage
