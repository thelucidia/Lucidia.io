import { useTranslation } from 'react-i18next';
// import React from "react";
import { Images } from '../components/Images';
import { Link } from 'react-router-dom';
const GameIntro = () => {
  const { t, i18n } = useTranslation();
  i18n.language;
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
          <Link to="/CurseOfThe" className="relative">
            <Images className="z-10" defaultSrc="/games/zombie/1.svg" hoverSrc="/games/zombie/2.svg" />
            <Images
              className="absolute max-w-[162px] max-h-[64px] top-[60px] left-[24px] hover:no-border hover:border-transparent"
              defaultSrc={`/${i18n.language}/games/zombie/curseof.svg`}
              hoverSrc={`/${i18n.language}/games/zombie/curseof.svg`}
            />
          </Link>
          <Link to="/Cryptocraft" className="relative">
            <Images className="z-10" defaultSrc="/games/lucidcraft/1.svg" hoverSrc="/games/lucidcraft/2.svg" />
            <Images
              className="absolute max-w-[162px] max-h-[64px] top-[60px] left-[24px] hover:no-border hover:border-transparent"
              defaultSrc={`/${i18n.language}/games/lucidcraft/cryptocraft.svg`}
              hoverSrc={`/${i18n.language}/games/lucidcraft/cryptocraft.svg`}
            />
          </Link>
          <Link to="/DesertWarior" className="relative">
            <Images className="z-10" defaultSrc="/games/desertwarior/1.svg" hoverSrc="/games/desertwarior/2.svg" />
            <Images
              className="absolute max-w-[162px] max-h-[64px] top-[60px] left-[24px] hover:no-border hover:border-transparent"
              defaultSrc={`/${i18n.language}/games/desertwarior/desert_warrior.svg`}
              hoverSrc={`/${i18n.language}/games/desertwarior/desert_warrior.svg`}
            />
          </Link>
          <Link to="/CanyonDriftPage" className="relative">
            <Images className="z-10" defaultSrc="/games/canyondrift/1.svg" hoverSrc="/games/canyondrift/2.svg" />
            <Images
              className="absolute max-w-[162px] max-h-[64px] top-[60px] left-[24px] hover:no-border hover:border-transparent"
              defaultSrc={`/${i18n.language}/games/canyondrift/Sand storm Racers.svg`}
              hoverSrc={`/${i18n.language}/games/canyondrift/Sand storm Racers.svg`}
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GameIntro;
