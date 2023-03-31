import React from "react";

const Hero = ({ title, content }) => {
  return (
    <div className="app-container mt-8">
      <h1 className="text-center">
        Design solutions
        <br className="block md:hidden" /> made easy
      </h1>
      <p className="mt-4 text-center">
        With over ten years of experience in various design disciplines, I’m
        your one-stop shop for your design needs.
      </p>
    </div>
  );
};

export default Hero;
