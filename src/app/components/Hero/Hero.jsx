import React from "react";
import Image from "next/image";
import "./Hero.css";
import Button from "../Button/Button";

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="hero-img">
        <div className="category">
          <h1 className="category-text">Men</h1>
          <Button text="shop collection" />
        </div>
        <Image src="/Assets/man.jpg" alt="men" width={600} height={200} />
      </div>
      <div className="hero-img">
        <div className="category">
          <h1 className="category-text">WOMEN</h1>
          <Button text="shop collection" />
        </div>
        <Image src="/Assets/women.jpg" alt="women" width={600} height={200} />
      </div>
    </div>
  );
};

export default Hero;
