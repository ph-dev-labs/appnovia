import React from 'react';
import "./NewsHolder.css";
import Image from 'next/image';

const images = [
  {
    src: "/Assets/img-1.jpg",
    alt: "blog news",
    title: "Top 10 Winter Essentials For 2022 You Should Try"
  },
  {
    src: "/Assets/img-2.jpg",
    alt: "blog news",
    class: "bigger",
    title: "The Complete Communication Skills Master Class For Work"
  },
  {
    src: "/Assets/img-3.jpg",
    alt: "blog news",
    title: "Premium Consultant Course For You"
  },
];

const NewsHolder = () => {
  return (
    <div className='newsholders'>
      {images.map((image, index) => (
        <div key={index} className={`newsholder ${image.class ? image.class : ''}`}>
           <div className="date-label">
              24th noveber 2022
            </div>
          <Image src={image.src} alt={image.alt} width={700} height={500} className='blog-img' />
          <div className="news-title">
            <h2 className='n-title'>{image.title}</h2>
            <p className="read-text-2">read more</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsHolder;
