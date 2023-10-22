import React from "react";
import "./Shop.css";
import Navbar from "@/app/components/Navbar/Navbar";
import Button from "@/app/components/Button/Button";

const Shop = () => {
  return (
    <main>
      <div className="imageContainer">
          <Navbar />
          <div className="mixed-textiles">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, ipsa. Similique iusto</p>
            <Button text="shop collection" />
          </div>
      </div>
    </main>
  );
};

export default Shop;
