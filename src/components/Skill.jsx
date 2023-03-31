import React from 'react'
import skill from '../assets/pattern-graphic-design.svg'
const Skill = () => {
  return (
    <div className="relative bg-glanticBlue">
      <img
        src={skill}
        alt=""
        className="absolute right-0  top-0 "
      />
      <p className='text-white'>Graphic Design</p>
    </div>
  );
}

export default Skill