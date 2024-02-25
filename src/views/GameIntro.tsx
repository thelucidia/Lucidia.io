import { useTranslation } from 'react-i18next';
// import React from "react";
import { Images } from '../components/Images';
import SubtleButton from '../components/SubtleButton';
import { Link, useNavigate } from 'react-router-dom';
const GameIntro = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  // const [isHover, setIsHover] = React.useState(false);

  // const handleHover = () => {
  //   setIsHover(!isHover);
  // };
  return (
    <section className="w-full h-auto pt-10 sm:pt-20 lg:pt-12 lg:pb-16 relative flex items-center font-primary text-secondary px-5">
      <div className="md:w-[82%] w-fit mx-auto flex flex-col">
        <div className="flex flex-row justify-between items-baseline">
          <h1 className="font-bold text-2xl sm:text-2xl md:text-3xl">{t('game')}</h1>
          <a href="/games" className="text-base z-10">
            {t('more_games')} &gt;
          </a>
        </div>
        <div className="relative pt-8 grid md:grid-cols-2 grid-cols-1 gap-x-12 2 gap-y-8 justify-items-stretch">
          <div
            className="absolute w-[544px] h-[291px] top-[207px] -left-1"
            style={{ backgroundColor: 'rgba(179, 133, 57, 0.08)', filter: 'blur(75px)' }}
          />
          <div
            className="absolute w-[515px] h-[301px] -top-[94px] left-[632px]"
            style={{ backgroundColor: 'rgba(179, 133, 57, 0.08)', filter: 'blur(60px)' }}
          />
          <Images className="z-10" defaultSrc="/games/zombie_outbreak.png" hoverSrc="/games/zombie_outbreak2.png" />
          <Images className="z-10" defaultSrc="/games/lucidcraft.png" hoverSrc="/games/lucidcraft2.png" />
          <Images className="z-10" defaultSrc="/games/battlefury.png" hoverSrc="/games/battlefury2.png" />
          <Images className="z-10" defaultSrc="/games/canyon_drift.png" hoverSrc="/games/canyon_drift2.png" />
        </div>
      </div>
    </section>
  );
};

export default GameIntro;
