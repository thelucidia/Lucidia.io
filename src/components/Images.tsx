import React from "react";
import { ImageProps } from "../utils/types";
import { motion } from "framer-motion";
export function Images({ hoverSrc, defaultSrc }: ImageProps) {
  const [isHovered, setIsHovered] = React.useState(false);

  // Function to toggle hover state
  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <img
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      src={isHovered ? hoverSrc : defaultSrc}
      alt="Hero"
      className=" top-0 object-contain shrink-0 hover:cursor-pointer border border-transparent  hover:border hover:border-yellow-300 transition ease-in-out delay-150	      duration-300	"
    />
  );
}

export function BattleImages({ hoverSrc, defaultSrc }: ImageProps) {
  const [isHovered, setIsHovered] = React.useState(false);
  const [currentImage, setCurrentImage] = React.useState(defaultSrc);

  const handleHover = () => {
    if (isHovered === false) {
      setIsHovered(true);
    }

    setTimeout(() => {
      setCurrentImage(hoverSrc);
    }, 200);
    setTimeout(() => {
      setCurrentImage("/games/battlefury/layout1.png");
    }, 500);

    setTimeout(() => {
      setCurrentImage("/games/battlefury/layoutb2.png");
    }, 700);
    setTimeout(() => {
      setCurrentImage("/games/battlefury/layoutb3.png");
    }, 800);
    setTimeout(() => {
      setCurrentImage("/games/battlefury/layout.png");
    }, 1000);
  };

  return (
    <motion.img
      onMouseEnter={handleHover}
      // onMouseLeave={handleHover}
      src={currentImage}
      alt="battle"
      className="
  h-[30vh] w-[80vw]
 absolute bottom-0 left-0 z-50	
  object-bottom "
      whileInView={{ scale: 1.1 }}
      whileHover={{ scale: 1.1 }}
      initial={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 300 }}
    />
  );
}
