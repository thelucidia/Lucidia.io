import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
// import { NumberLoop } from "../components/BattlerfurySlider/BattleFurySlider";
import { useEffect, useRef, useState } from "react";
import Odometer from "react-odometerjs";
const Banner1 = () => {
  const ref = useRef();
  const [animationCount, setAnimationCount] = useState(0);
  const { t } = useTranslation();

  const bannerData = [
    {
      currency: true,
      title: "1M+",
      desc: t("to_be"),
    },
    {
      title: "115M",
      desc: t("in_game"),
    },
    {
      title: "116+",
      desc: t("game_inside"),
    },
    {
      title: "160+",
      desc: t("maps"),
    },
  ];

  useEffect(() => {
    console.log(animationCount);
    const interval = setInterval(() => {
      setAnimationCount((prevCount) => prevCount + 1);
    }, 2000); // Adjust the interval time as needed (2000 milliseconds = 2 seconds)

    return () => clearInterval(interval);
  }, []);

  const [countAnimation, setCountAnimation] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((enteries) => {
      const entry = enteries[0];
      if (entry && entry.isIntersecting) {
        setCountAnimation(true);
      }
    });
    observer.observe(ref.current);
  }, []);

  return (
    <section
      className="w-full h-auto pt-10 sm:pt-20 lg:pt-20 lg:pb-14 bg-bg relative flex items-center font-primary text-secondary px-5 padding_bottom"
      ref={ref}
    >
      <div className="mx-auto w-fit flex text-center gap-4 sm:gap-10 md:gap-16">
        {bannerData.map((items, i) => (
          <div className="flex flex-col justify-start gap-2" key={i}>
            <div className="number-loop--outer">
              <motion.h1 className="number-loop  text-primary sm:text-4xl md:text-5xl text-xl font-bold flex justify-center   ">
                {items?.currency && "$"}
                <Odometer
                  value={`${countAnimation ? items?.title : 0}`}
                  format="d"
                />
                {(items?.title).includes("M") ? "M" : "+"}
              </motion.h1>
            </div>
            <p className="md:text-2xl sm:text-lg text-xs">{items.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Banner1;
