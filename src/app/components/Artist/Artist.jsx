import React from "react";
import "./Artist.css";
import Image from "next/image";
import Button from "../Button/Button";

const Artist = () => {
  const artistImage = [
    {
      src: "/Assets/main-home-image-3-1.jpg",
      alt: "Artist",
    },
    {
      src: "/Assets/main-home-image-4-1.jpg",
      alt: "Artist",
    },
  ];

  return (
    <div className="artist-container">
      {artistImage.map((image, index) => (
        <div className="artist-img-container" key={index}>
          <Image src={image.src} alt={image.alt} width={400} height={300} />
        </div>
      ))}

      <div className="artist-text-cont">
        <h3 className="artist-title">Meet The Artists Behind The Corsen Maria & Sophia</h3>
        <p className="a-p">
          Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna.
        </p>
        <Button text="shop collection" />
      </div>
    </div>
  );
};

export default Artist;
