import React from "react";
import logo from "../assets/logo.svg";
const Navbar = () => {
  return (
    <header className="app-container py-4">
      <nav className="flex items-center justify-between">
        <img src={logo} width="64px" height="64px" alt="logo" />
        <button className="btn btn-black">Free Consultation</button>
      </nav>
    </header>
  );
};

export default Navbar;
