const Slide = ({ src, overlay }) => {
  return (
    <div
      className={`w-[270px] h-[180px] md:w-[540px] md:h-[360px] rounded-[8px] flex items-center justify-center ${
        overlay ? "overlay" : ""
      } overflow-hidden`}
    >
      <img src={src} alt="project" />
    </div>
  );
};

export default Slide;
