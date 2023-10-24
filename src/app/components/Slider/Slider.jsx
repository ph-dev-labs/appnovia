"use client"
import React, { useEffect, useState } from 'react';
import './Slider.css';
import Image from 'next/image';

const slideImage = [
  {
    src: "/Assets/slide-img-4.jpg",
    alt: "slide image",
  },
  {
    src: "/Assets/slide-3.jpg",
    alt: "slide image",
  },
  {
    src: "/Assets/slide-6.jpg",
    alt: "slide image",
  },
  {
    src: "/Assets/slide-img-4.jpg",
    alt: "slide image",
  },
  {
    src: "/Assets/slide-6.jpg",
    alt: "slide image",
  },
  {
    src: "/Assets/slide-img-7.jpg",
    alt: "slide image",
  },
  {
    src: "/Assets/slide-3.jpg",
    alt: "slide image",
  },
];

const Slider = () => {
  const slideWidth = 100 / slideImage.length;
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance the slider every 2.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % slideImage.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className="slider-container">
      <div className="slider-wrapper">
        <div className="slider" style={{ transform: `translateX(-${currentSlide * slideWidth}%)` }}>
          {slideImage.map((image, index) => (
            <div key={index} className="slide">
              <Image src={image.src} alt={image.alt} width={400} height={300} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
