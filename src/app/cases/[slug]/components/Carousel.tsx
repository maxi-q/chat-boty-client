'use client'

import PostsNext from '../../../../constants/svg/PostsNext'
import PostsPrev from '../../../../constants/svg/PostsPrev'

const IMAGES = ['horizontal', 'horizontal', 'horizontal', 'horizontal']

import { useState } from 'react'

import { CarouselImage } from './ui/MainImage'

type CarouselProps = {
  images?: string[]
  prevButton?: React.ReactNode
  nextButton?: React.ReactNode
  width?: number
  height?: number
}

const Carousel: React.FC<CarouselProps> = ({ images = IMAGES, prevButton, nextButton, width = 1600, height = 900 }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length
    setCurrentIndex(newIndex)
  }

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % images.length
    setCurrentIndex(newIndex)
  }
  console.log(width, height)
  return (
    <div className="relative w-full pb-[30px]">
      <div className={`w-full overflow-hidden rounded-xl whitespace-nowrap`}>
        <div className={`block transition-transform duration-500 h-full`} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {images.map((image, index) => (
            <div key={index} className="w-full h-full select-none inline-flex justify-center">
              <CarouselImage image={image} width={width} height={height} />
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center absolute inset-x-0 bottom-0 h-[30px]">
        <button onClick={prevSlide} className=" bottom-0 left-0 transform">
          {prevButton || <DefaultButton direction="left" />}
        </button>
        <span className="my-0 px-2 select-none font-medium">
          {currentIndex + 1}/{images.length}
        </span>
        <button onClick={nextSlide} className=" bottom-0 right-0 transform">
          {nextButton || <DefaultButton direction="right" />}
        </button>
      </div>
    </div>
  )
}

const DefaultButton: React.FC<{ direction: 'left' | 'right' }> = ({ direction }) => (
  <div className={`p-2 ${direction === 'left' ? 'ml-2' : 'mr-2'}`}>{direction === 'left' ? <PostsPrev /> : <PostsNext />}</div>
)

export default Carousel