import React from "react";
import "./Footer.css";
import Image from "next/image";

const Footer = () => {
  const arrItems = ["support", "company", "location"];

  return (
    <div className="footer">
      <div className="foot-items">
        <div className="logo">
          <Image
            src={"/Assets/logo.svg"}
            height={10}
            width={200}
            alt="Logo"
            className="footer-logo"
          />
          <p className="foot-decs">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium
          </p>
        </div>
        <div className="f-t-t">
          {arrItems.map((item, index) => (
            <h2 className="foot-text" key={index}>{item}</h2>
          ))}
        </div>
        <div className="emailer">
              <p className="email-add">E-mail address</p>
              <div style={{ fontSize: "22px" }}>&rarr;</div>
            </div>
      </div>
    </div>
  );
};

export default Footer;
