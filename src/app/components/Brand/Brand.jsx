import React from "react";
import "./Brand.css";
import Brands from "../../../../public/Assets/brand.svg";
import Vector from "../../../../public/Assets/Vector.svg";
import Image from "next/image";
const Brand = () => {
  return (
    <div className="brand-holder">
      <div className="vector-holder">
        <Image src={Vector} width={20} height={20} alt="vector" />
      </div>
      <p className="brand-text">
        Accusantium doloremque laudantium, totam rem aperiam. Sed ut
        perspiciatis unde omnis iste natus error sit voluptatem.
      </p>
      <div className="brand-holder">
        <Image src={Brands} width={700} height={100} alt="vector" />
      </div>
    </div>
  );
};

export default Brand;
