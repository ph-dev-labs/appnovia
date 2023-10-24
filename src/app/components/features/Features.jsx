import React from "react";
import Image from "next/image";
import "./Features.css";
const Features = () => {
  const icons = [
    {
      src: "/Assets/svg-1.svg",
      text: "fast delivery",
    },
    {
      src: "/Assets/svg-2.svg",
      text: "free returns",
    },
    {
      src: "/Assets/svg-3.svg",
      text: "secure checkout",
    },
    {
      src: "/Assets/svg.svg",
      text: "order tracking",
    },
  ];

  return (
    <div className="features">
      {icons.map((icon, index) => (
        <div key={index} className="icon-fec">
          <div className="w-f">
            <img src={icon.src} alt={icon.text} />
            <p className="text-f-i">{icon.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Features;
