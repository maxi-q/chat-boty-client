'use client'

import Image from 'next/image'
import ArticleNext from '../../../../constants/svg/ArticleNext';
import ArticlePrev from '../../../../constants/svg/ArticlePrev';

const images = [
  '/video/horizontal.webp',
  '/video/horizontal.webp',
  '/video/horizontal.webp',
  '/video/horizontal.webp',
]

import { useState } from 'react';

type CarouselProps = {
  images?: string[];
  prevButton?: React.ReactNode;
  nextButton?: React.ReactNode;
};

const Carousel: React.FC<CarouselProps> = ({ prevButton, nextButton }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative w-full h-max overflow-hidden">
      <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <Image width={852} height={483} key={index} src={image} alt={`Slide ${index}`} className="w-full h-full object-cover" />
        ))}
      </div>
      <button onClick={prevSlide} className="absolute bottom-0 left-0 transform translate-y-1">
        {prevButton || <DefaultButton direction="left" />}
      </button>
      <button onClick={nextSlide} className="absolute bottom-0 right-0 transform translate-y-1">
        {nextButton || <DefaultButton direction="right" />}
      </button>
    </div>
  );
};

const DefaultButton: React.FC<{ direction: 'left' | 'right' }> = ({ direction }) => (
  <div className={`p-2 ${direction === 'left' ? 'ml-2' : 'mr-2'}`}>
    {direction === 'left' ? <ArticlePrev/> : <ArticleNext/>}
  </div>
);

export default Carousel;


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