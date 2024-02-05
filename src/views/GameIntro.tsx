import { useTranslation } from "react-i18next";
import React from "react";
import { Images } from "../components/Images";
const GameIntro = () => {
  const { t } = useTranslation();
  const [isHover, setIsHover] = React.useState(false);

  const handleHover = () => {
    setIsHover(!isHover);
  };
  return (
    <section className="w-full h-auto pt-10 sm:pt-20 lg:pt-12 lg:pb-16 bg-[#171717] relative flex items-center font-primary text-secondary px-5">
      <div className="md:w-[75%] w-fit mx-auto flex flex-col">
        <h1 className="font-bold text-2xl sm:text-2xl md:text-3xl">
          {t("game")}
        </h1>
        <div className="pt-8 grid md:grid-cols-2 grid-cols-1 gap-x-12 2 gap-y-8 justify-items-stretch">
          <Images
            defaultSrc="/games/zombie_outbreak.png"
            hoverSrc="/games/zombie_outbreak2.png"
          />
          <Images
            defaultSrc="/games/lucidcraft.png"
            hoverSrc="/games/lucidcraft2.png"
          />
          <Images
            defaultSrc="/games/battlefury.png"
            hoverSrc="/games/battlefury2.png"
          />
          <Images
            defaultSrc="/games/canyon_drift.png"
            hoverSrc="/games/canyon_drift2.png"
          />
        </div>
      </div>
    </section>
  );
};

export default GameIntro;
