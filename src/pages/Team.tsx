import { IoMdArrowRoundUp } from "react-icons/io";
import Footer from "../components/Footer";
import { cn } from "../utils";
import HeroTeam from "../views/Team/HeroTeam";
import JoinTeam from "../views/Team/JoinTeam";
import Meet from "../views/Team/Meet";
import Mission from "../views/Team/Mission";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Team = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  console.log("🚀 ~ file: Team.tsx:13 ~ Team ~ scrollPosition:", scrollPosition)
  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
      className="bg-bg h-auto"
    >
      <HeroTeam />

      <Mission />
      <Meet />
      <JoinTeam />
      <Footer />

      <button
        className={cn(
          "fixed w-12 h-12 bg-white/10 backdrop-blur-md rounded-md bottom-5 right-5 z-20 grid place-content-center pointer-events-none transition-all ease-in-out duration-500 opacity-0 rotate-180",
          { "rotate-0 opacity-100 pointer-events-auto text-white": scrollPosition > 500 }
        )}
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        <IoMdArrowRoundUp />
      </button>
    </motion.div>
  );
};

export default Team;
