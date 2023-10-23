import React from "react";
import "./Shop.css";
import Navbar from "@/app/components/Navbar/Navbar";
import Button from "@/app/components/Button/Button";
import Grid from "@/app/components/Grid-holder/Grid";
import Hero from "@/app/components/Hero/Hero";
import Brand from "@/app/components/Brand/Brand";
import Overlay from "../../../../public/Assets/overlay.jpg";
import Image from "next/image";
import Blog from "@/app/components/Blog/Blog";

const Shop = () => {
  return (
    <main>
      <div className="imageContainer">
        <Navbar />
        <div className="mixed-textiles">
          <h1 className="title">Mixed textiles</h1>
          <p className="lorem">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod.
          </p>
          <Button text="shop collection" />
        </div>
      </div>
      <div className="store-sec">
        <p className="plain-text-sec">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud.
        </p>
        <Grid />
        <div className="store-section">
          <Hero />
        </div>
        <div className="brand-section">
          <Brand />
        </div>
        <div className="overlay">
          <div className="text-over-lay">
            <h1 className="over-lay-header">ONYX x THE FLOW</h1>
            <p className="read-text">read more</p>
          </div>
          <Image src={Overlay} width={1200} height={300} />
        </div>
        <div className="blog-sec">
          <Blog />
        </div>
        <div className="newsletter-section">
          <div className="newsletter-text-holder">
            <h2 className="newsletter-text">
              Sing up to our newsletter for all the latest news & discounts.
            </h2>

            <div className="email">
              <p className="email-add">E-mail address</p>
              <div style={{fontSize: "22px"}}>&rarr;</div>

            </div>
          </div>
          <Image
            src="/Assets/section.elementor-section.jpg"
            className="newsletter-img"
            alt="newsletter"
            width={200}
            height={200}
          />
        </div>
      </div>
    </main>
  );
};

export default Shop;
