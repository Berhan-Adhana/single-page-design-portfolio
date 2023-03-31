import React from "react";

const CTA = ({ title, content }) => {
  return (
    <div className="bg-black mt-[88px]">
      <div className="w-full md:app-container text-white py-12 flex flex-col gap-y-6 justify-center items-center lg:flex-row lg:justify-between lg:items-center">
        <div className="flex flex-col gap-y-6 max-w-[540px] p-6 ">
          <h3 className="text-white text-center lg:text-left">{title}</h3>
          <p className="text-center lg:text-left">{content}</p>
        </div>
        <button className="btn btn-primary ">Free Consultation</button>
      </div>
    </div>
  );
};

export default CTA;
