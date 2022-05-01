import React from "react";
import "./Footer.css";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div>
      <div className="text-center text-light footer ">
        <h3>Dr.Rupasree Biswas</h3>
        <p>Assistant Prof. of Gynee and Obs</p>
        <small>copyright© {year}</small>
      </div>
    </div>
  );
};

export default Footer;
