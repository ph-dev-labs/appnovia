import React from 'react'
import "./NewsHolder.css"
import Image from 'next/image'
const images = [
    {
        src: "/Assets/img-1.jpg",
        alt: "blog news"
    },
    {
        src: "/Assets/img-2.jpg",
        alt: "blog news",
        class: "bigger"
    },
    {
        src: "/Assets/img-3.jpg",
        alt: "blog news"
    },
]

const NewsHolder = ({ title }) => {
    return (
      <div className='newsholders'>
        {images.map((image, index) => (
          <div key={index} className={`newsholder ${image.class ? image.class : ''}`}>
            <Image src={image.src} alt={image.alt} width={700} height={500} className='blog-img'/>
          </div>
        ))}
        <div className="news-title">
          <h2>{title}</h2>
        </div>
      </div>
    );
  };
export default NewsHolder