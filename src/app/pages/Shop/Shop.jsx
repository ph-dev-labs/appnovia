import React from "react";
import "./Shop.css";
import Navbar from "@/app/components/Navbar/Navbar";
import Button from "@/app/components/Button/Button";
import Grid from "@/app/components/Grid-holder/Grid";
import Hero from "@/app/components/Hero/Hero";


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
      </div>
    </main>
  );
};

export default Shop;
