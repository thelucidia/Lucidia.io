import { motion } from 'framer-motion';
// import Button from "../../components/Button";
import Footer from '../../components/Footer';
import Nav from '../../components/Nav';
import OtherGames from '../../components/OtherGames';
import { cn } from '../../utils';
import { useTranslation } from 'react-i18next';
import { details } from '../../utils/types';
import Button from '../../components/Button';
import { IoIosArrowRoundDown } from 'react-icons/io';

const Zombie = () => {
  const { t } = useTranslation();
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
      className="w-full min-h-screen bg-bg"
    >
      <div className="w-full min-h-[40vh] md:min-h-[60vh] lg:min-h-screen px-8 sm:px-auto p-5 font-primary relative text-secondary flex  justify-center bg-bg">
        <Nav />
        <div className="bg-video">
          <video className="w-full h-full object-cover absolute bottom-0 left-0 object-bottom" autoPlay muted loop>
            <source src="/video/zombie.mp4" type="video/mp4" />
          </video>
          <img
            src={'/games/zombie/title.png'}
            className="h-[25%] object-cover absolute top-[30%] left-[12.5%] object-top z-30"
          />
          <div className="absolute top-[55%] left-[12.5%] z-30 text-xl">{t('zombie_desc1')}</div>
        </div>

        <div className="max-w-xs sm:max-w-full w-full flex flex-col justify-end gap-y-8 sm:gap-y-8 md:translate-y-0 sm:translate-y-24 translate-y-24 md:gap-y-12 md:pb-10 items-center h-auto mx-auto z-10 mt-[4.5rem] sm:mt-[7rem] md:mt-[10rem] absolute bottom-5 ">
          <Button className="w-full md:w-56" stretchOnMobile>
            {t('games.play_game')}
          </Button>
          <div className="   flex justify-center items-center bottom-0	text-white	">
            <div className="relative">
              See Details{' '}
              <motion.span
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 10, opacity: 1 }}
                transition={{
                  duration: 1,
                  ease: 'easeInOut',
                  times: [0, 0.2, 0.5, 0.8, 1],
                  repeat: Infinity,
                  // repeatDelay: 0.1,
                }}
                className="absolute"
              >
                <IoIosArrowRoundDown />
              </motion.span>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-auto px-8 py-10 -mb-20 md:mb-0">
        <div className="max-w-[1100px] pb-14 sm:pb-20 w-full min-h-screen mx-auto text-secondary font-primary justify-between flex gap-10 pt-16 md:flex-row flex-col-reverse">
          <div className="w-full md:space-y-7 space-y-4">
            <div className="border-primary border-[1px]">
              {/* <h1 className="text-xl md:text-5xl text-primary font-bold text-center p-4">
                {t("games.zombie.title")}
              </h1> */}
              <div className="p-4">
                <img src={'/games/zombie/title2.png'} className="h-[25%] object-cover" />
              </div>
              <p className="mt-2 p-4 bg-primary text-black text-base md:text-xl">{t('games.zombie.desc')}</p>
            </div>
            <h2 className="text-primary md:text-2xl text-xl font-bold">{t('overview')} :</h2>
            <p className=" text-base md:text-xl">{t('games.zombie.overview')}</p>
            <h2 className="md:text-2xl text-xl text-primary font-bold">{t('game_details')} :</h2>

            <div className=" text-base md:text-xl">
              {(t('games.zombie.details', { returnObjects: true }) as details[]).map((items, i) => (
                <div className="flex gap-1" key={i}>
                  <h1 className="">
                    <b className="text-primary">{items.title}:</b> <span>{items.value}</span>
                  </h1>
                </div>
              ))}
            </div>

            <div className=" text-base md:text-xl">
              {(t('games.zombie.details2', { returnObjects: true }) as string[]).map((items, i) => (
                <p className="" key={i}>
                  {items}
                </p>
              ))}
            </div>
          </div>
          <div className="w-full flex items-center md:flex-col md:gap-10 gap-4 justify-center md:justify-start">
            {[...new Array(3)].map((_, i) => (
              <img
                src={`/games/zombie/${i + 1}.webp`}
                alt={`Image${i + 1}`}
                className={cn('w-1/2 md:w-auto', {
                  'md:block hidden': i === 0,
                })}
                key={i}
              />
            ))}
          </div>
        </div>

        <OtherGames />
      </div>

      <Footer />
    </motion.section>
  );
};

export default Zombie;
