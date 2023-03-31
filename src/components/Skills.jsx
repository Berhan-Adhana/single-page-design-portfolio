import { motion } from "framer-motion";
import skill from "../assets/pattern-graphic-design.svg";
import UI from "../assets/pattern-ui-ux.svg";
import Apps from "../assets/pattern-apps.svg";
import Illustrations from "../assets/pattern-illustrations.svg";
import Photography from "../assets/pattern-photography.svg";
import motionGraphics from "../assets/pattern-motion-graphics.svg";

const Skills = () => {
  return (
    <div className="flex app-container flex-col xl:justify-center mt-8 items-center gap-y-6 xl:flex-row xl:gap-x-6">
      {/* 1 */}
      {/* Wapper around the first and the second */}
      <div className="flex flex-col items-center gap-y-6 md:flex-row md:gap-x-6">
        <motion.article
          initial={{ opacity: 0, y: "50%" }}
          transition={{ duration: 0.5 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative bg-glanticBlue w-[343px] h-[364px] md:w-[333px] lg:w-[354px] lg:h-[364px] flex items-end justify-start rounded-[8px]"
        >
          <img src={skill} alt="" className="absolute right-0  top-0 " />
          <p className="text-white pb-4 pl-4">Graphic Design</p>
        </motion.article>
        {/* 2 */}
        <div className=" flex flex-col gap-y-6">
          <div className="flex items-center justify-center gap-x-6">
            <motion.atricle
              initial={{ opacity: 0, x: "-100%" }}
              transition={{ duration: 0.5 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-summerYellow w-[159px] h-[182px] md:w-[155px] md:h-[182px] lg:w-[164px]  rounded-[8px] relative flex items-end justify-start"
            >
              <img src={UI} alt="UI/UX" className="absolute right-0  top-0" />
              <p className="text-white pb-4 pl-4">UI/UX</p>
            </motion.atricle>
            <motion.article
              initial={{ opacity: 0, x: "100%" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-lightPink w-[159px] h-[182px] md:w-[155px] md:h-[182px] lg:w-[164px]  rounded-[8px] relative flex items-end justify-start"
            >
              <img src={Apps} alt="Apps" className=" absolute right-0  top-0" />
              <p className="text-white pb-4 pl-4">Apps</p>
            </motion.article>
          </div>
          <motion.article
            initial={{ opacity: 0, x: "-100%" }}
            transition={{ duration: 0.5 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-primary w-[354px] h-[158px] md:w-[333px] lg:w-[354px] rounded-[8px] relative flex items-end justify-start"
          >
            <img
              src={Illustrations}
              alt="Illustrations"
              className=" absolute right-0  top-0"
            />
            <p className="text-white pb-4 pl-4">Illustrations</p>
          </motion.article>
        </div>
      </div>

      {/* 3 */}
      <div className="flex flex-col items-center gap-y-6 md:flex-row md:gap-x-6 xl:flex-col  ">
        <motion.article
          initial={{ opacity: 0, x: "100%" }}
          transition={{ duration: 0.5 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-cyan w-[354px] h-[182px] md:w-[333px] lg:w-[354px] rounded-[8px] relative flex items-end justify-start"
        >
          <img
            src={Photography}
            alt="Photography"
            className=" absolute right-0  top-0"
          />
          <p className="text-white pb-4 pl-4">Photography</p>
        </motion.article>
        <motion.article
          initial={{ opacity: 0, x: "-100%" }}
          transition={{ duration: 0.5 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-purple w-[354px] h-[182px] md:w-[333px] lg:w-[354px] rounded-[8px] relative flex items-end justify-start"
        >
          <img
            src={motionGraphics}
            alt="Motion Graphics"
            className=" absolute right-0  top-0"
          />
          <p className="text-white pb-4 pl-4">Motion Graphics</p>
        </motion.article>
      </div>
    </div>
  );
};

export default Skills;
