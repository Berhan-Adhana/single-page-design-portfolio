import React from "react";
import logo from "../assets/logo.svg";
const Footer = () => {
  return (
    <footer className="flex items-center justify-between p-2 app-container  mt-12 ">
      <img src={logo} width="64px" height="64px" alt="logo" />
      <button className="btn btn-black">Free Consultation</button>
    </footer>
  );
};

export default Footer;
