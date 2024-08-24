'use client'

import ArticleNext from '../../../../constants/svg/ArticleNext'
import ArticlePrev from '../../../../constants/svg/ArticlePrev'

const IMAGES = ['horizontal', 'horizontal', 'horizontal', 'horizontal']

import { useState } from 'react'
import { MainImage } from './ui/MainImage'

type CarouselProps = {
  images?: string[]
  prevButton?: React.ReactNode
  nextButton?: React.ReactNode
}

const Carousel: React.FC<CarouselProps> = ({ images = IMAGES, prevButton, nextButton }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length
    setCurrentIndex(newIndex)
  }

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % images.length
    setCurrentIndex(newIndex)
  }

  return (
    <div className="relative w-full h-max pb-[30px]">
      <div className="w-full h-max aspect-video rounded-xl overflow-hidden">
        <div className="relative flex transition-transform duration-500 h-full" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {images.map((image, index) => (
            <MainImage key={index} image={image} />
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center absolute inset-x-0 bottom-0 h-[30px]">
        <button onClick={prevSlide} className=" bottom-0 left-0 transform">
          {prevButton || <DefaultButton direction="left" />}
        </button>
        <h4 className="my-0 px-2 select-none">
          {currentIndex + 1}/{images.length}
        </h4>
        <button onClick={nextSlide} className=" bottom-0 right-0 transform">
          {nextButton || <DefaultButton direction="right" />}
        </button>
      </div>
    </div>
  )
}

const DefaultButton: React.FC<{ direction: 'left' | 'right' }> = ({ direction }) => (
  <div className={`p-2 ${direction === 'left' ? 'ml-2' : 'mr-2'}`}>{direction === 'left' ? <ArticlePrev /> : <ArticleNext />}</div>
)

export default Carousel

// const CustomButton: React.FC<{ direction: 'left' | 'right'; onClick: () => void }> = ({ direction, onClick }) => (
//   <button onClick={onClick} className={`p-2 bg-blue-500 text-white rounded-full ${direction === 'left' ? 'ml-2' : 'mr-2'}`}>
//     {direction === 'left' ? 'Prev' : 'Next'}
//   </button>
// );

// <Carousel
//   images={images}
//   prevButton={<CustomButton direction="left" onClick={prevSlide} />}
//   nextButton={<CustomButton direction="right" onClick={nextSlide} />}
// />
