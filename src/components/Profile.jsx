import React from "react";
import { motion } from "framer-motion";
const Profile = ({ profileImage, title, bio }) => {
  return (
    <div className="flex flex-col gap-y-10 md:flex-row lg:gap-x-[90px]  items-center mt-[120px] app-container ">
      <motion.img
        initial={{ opacity: 0, y: "50%" }}
        transition={{ duration: 0.5 }}
        animate={{ opacity: 1, y: 0 }}
        src={profileImage}
        alt="amy"
        className="w-[300px] h-[300px] md:w-[364px] md:h-[364px] md:relative md:-left-[10rem] lg:left-0"
      />
      <div className="flex flex-col gap-y-6 items-center lg:basis-[540px] lg:items-start ">
        <motion.h3
          initial={{ opacity: 0, x: "-100%" }}
          transition={{ duration: 0.5, delay: 0.4 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-center lg:text-left"
        >
          {title}
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: "100%" }}
          transition={{ duration: 0.5, delay: 0.5 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          {bio}
        </motion.p>
        <button className="btn btn-primary">Free Consultation</button>
      </div>
    </div>
  );
};

export default Profile;
