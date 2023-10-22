import React from "react";
import "./Grid.css";
import Bookmark from "../../../../public/Assets/cart.svg";
import Eye from "../../../../public/Assets/eye.svg";
import Book from "../../../../public/Assets/bookmark.svg";
import Image from "next/image";

const images = [
  {
    src: "/Assets/Main-product1.jpg",
    alt: "Cloth Collection 1",
    desc: "Black Jacket",
    price: "$3000",
    status: "empty",
  },
  {
    src: "/Assets/Main-product-list-2.jpg",
    alt: "Cloth Collection 2",
    desc: "Leather Jacket",
    price: "$300",
    status: "sold",
  },
  {
    src: "/Assets/Main-product-list-4.jpg",
    alt: "Cloth Collection 3",
    desc: "Black Outfit",
    price: "$5600",
    status: "new",
  },
  {
    src: "/Assets/product-new-img-1.jpg",
    alt: "Cloth Collection 4",
    desc: "T-shirt",
    price: "$550",
    status: "sold",
  },
  {
    src: "/Assets/Main-product1.jpg",
    alt: "Cloth Collection 1",
    desc: "Black Jacket",
    price: "$600",
    status: "sales",
  },
  {
    src: "/Assets/Main-product-list-2.jpg",
    alt: "Cloth Collection 2",
    desc: "Leather Jacket",
    price: "$3600",
    status: "empty",
  },
  {
    src: "/Assets/Main-product-list-4.jpg",
    alt: "Cloth Collection 3",
    desc: "Black Outfit",
    price: "$3040",
    status: "sale",
  },
  {
    src: "/Assets/product-new-img-1.jpg",
    alt: "Cloth Collection 4",
    desc: "T-shirt",
    price: "$5600",
    status: "new",
  },
];

// Function to generate class based on the status
function getStatusClass(status) {
  if (status === "sale") return "sold-label ";
  if (status === "sold") return "sold";
  if (status === "new") return "sold-label ";
  return "empty";
}

const Grid = () => {
  return (
    <div className="container">
      <div className="img-grid">
        {images.map((image, index) => (
          <div key={index} className="image-container">
            <div className={` ${getStatusClass(image.status)}`}>
              {image.status}
            </div>
            <div className="view-label">
              <Image src={Eye} alt="Eye icon" width="auto" height="auto" />
              <Image src={Book} alt="Book icon" />
            </div>
            <img src={image.src} alt={image.alt} className="img" />
            <div className="desc-holder">
              <div className="h-d">
                <p className="price">{image.desc}</p>
                <p className="desc">{image.price}</p>
              </div>
              <div className="s-icon-h">
                <Image src={Bookmark} alt="Bookmark icon" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grid;
