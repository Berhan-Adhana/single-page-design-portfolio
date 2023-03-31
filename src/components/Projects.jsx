import { useState } from "react";
import { motion } from "framer-motion";
import arrowLeft from "../assets/icon-arrow-left.svg";
import arrowRight from "../assets/icon-arrow-right.svg";
import Slide from "./Slide";
const Projects = ({ slides }) => {
  const [currentData, setCurrentData] = useState(0);
  const handleNextSlide = () => {
    currentData === slides.length - 1
      ? setCurrentData(0)
      : setCurrentData(currentData + 1);
  };
  const handlePrevSlide = () => {
    currentData === 0
      ? setCurrentData(slides.length - 1)
      : setCurrentData(currentData - 1);
  };
  return (
    <div className="flex flex-col items-center justify-center gap-y-6 overflow-x-hidden mt-[100px]">
      <h4 className="font-bold text-[32px] leading-[40.32px] text-black">
        My Work
      </h4>
      <div className="flex items-center justify-center gap-x-6 overflow-x-hidden transition-opacity duration-500">
        <Slide
          src={
            currentData === 0
              ? slides[slides.length - 1]
              : slides[currentData - 1]
          }
          overlay
        />
        <Slide src={slides[currentData]} />
        <Slide
          src={
            currentData === slides.length - 1
              ? slides[0]
              : slides[currentData + 1]
          }
          overlay
        />
      </div>
      <div className="flex gap-x-[80px]">
        <div
          className="w-[64px] h-[64px] rounded-full bg-black flex items-center justify-center cursor-pointer hover:bg-glanticBlue transition-colors duration-300"
          onClick={handlePrevSlide}
        >
          <img src={arrowLeft} alt="left arrow" className=" text-white  " />
        </div>
        <div
          className="w-[64px] h-[64px] rounded-full bg-black flex items-center justify-center  cursor-pointer hover:bg-glanticBlue transition-colors duration-300"
          onClick={handleNextSlide}
        >
          <img src={arrowRight} alt="right arrow" className="  text-white " />
        </div>
      </div>
    </div>
  );
};

export default Projects;
