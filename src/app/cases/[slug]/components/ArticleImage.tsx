import { MainImage } from './ui/MainImage'

const IMAGE = 'horizontal'

type ImageProps = {
  image: string
  width?: number
  height?: number
}

const CaseImage: React.FC<ImageProps> = ({ image = IMAGE, width = 1600, height = 900 }) => {
  return (
    <div className="relative w-full h-max pb-[30px]">
      <div className={`w-full flex h-max aspect-[${width}/${height}] rounded-xl overflow-hidden`}>
        <div className="relative flex h-full mx-auto">
          <MainImage image={image} width={width} height={height} />
        </div>
      </div>
    </div>
  )
}

export default CaseImage
