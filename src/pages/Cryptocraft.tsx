import { motion } from 'framer-motion';

import { useTranslation } from 'react-i18next';
import { IoIosArrowRoundDown } from 'react-icons/io';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import OtherGames from '../components/OtherGames';
import Button from '../components/Button';
import Meta from '../views/Meta';

const Cryptocraft = () => {
  const { t } = useTranslation();
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
      className="w-full min-h-screen bg-bg"
    >
      <Meta title={t('meta.games.title')} description={t('meta.games.desc')} />
      <div className="w-full min-h-[40vh] md:min-h-[48vh] lg:min-h-[48vh] xl:min-h-screen px-8 sm:px-auto p-5 font-primary relative text-secondary flex  justify-center bg-bg">
        <Nav />
        <div className="bg-video">
          <video className="w-full h-full object-cover absolute bottom-0 left-0 object-bottom" autoPlay muted loop>
            <source src="/video/zombie.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="max-w-xs sm:max-w-full w-full flex flex-col justify-end gap-y-3 sm:gap-y-7 md:translate-y-0 sm:translate-y-24 translate-y-24 md:gap-y-7 md:pb-10 items-center h-auto mx-auto z-10 mt-[0rem] sm:mt-[6rem] md:mt-[10rem] absolute top-9 ">
          <div className="minecrafterfonts text-4xl sm:text-6xl md:text-7xl lg:text-[96px] text-left font-bold left-0 right-0 items-center">
            {t('CAYPTDCRAFT')}
          </div>

          <Button className="w-full md:w-56" stretchOnMobile>
            {t('games.play_game')}
          </Button>
          <div className="flex justify-center items-center bottom-0	text-white	">
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
        <div className="container pb-8 md:pb-14 sm:pb-20 w-full min-h-screen mx-auto flex gap-10 pt-10">
          <div className="">
            <div className="minecrafterfonts discovery text-primary text-3xl lg:text-5xl xl:text-6xl 2xl:text-8xl text-center mt-3 items-center">
              {t('DISCOVER CAYPTOCRAFT')}
            </div>
            <p className="text-lg text-white text-center pt-4">
              Lucidcraft is a sandbox adventure survival game set in a procedurally generated world. You can craft tools
              like pickaxe, axe, and shovel. Create a block and gather all the recourses as much as you need.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-5">
              <div className="pt-5 lg:pt-10">
                <img className="max-w-full mb-5 md:mb-9" src={'/games/cryptcoraftImg/gameGue.jpg'} alt="" />
                <div className="overview text-white">
                  <h2 className="text-2xl lg:text-3xl text-primary mb-3 minecrafterfonts">Game Overview :</h2>
                  <p className="text-base md:text-xl text-secondary font-primary">
                    Curse Of The Pharaoh combines the fast-paced action of FPS games with the mystery of ancient
                    mythology, all set in a futuristic Dubai landscape. Inspired by the intense cooperative gameplay of
                    Left 4 Dead 2, navigate through ancient curses and futuristic challenges in this adrenaline-fueled
                    adventure. Dive into <span className="text-primary">Curse Of The Pharaoh</span>
                  </p>
                </div>
              </div>
              <div className="pt-5 lg:pt-10">
                <img className="max-w-full mb-5 md:mb-9" src={'/games/cryptcoraftImg/gameFeat.jpg'} alt="" />
                <div className="Feature text-white">
                  <h2 className="text-2xl lg:text-3xl text-primary mb-3 minecrafterfonts">Game Feature :</h2>
                  <ul className="text-base md:text-xl list-disc pl-3 text-secondary font-primary">
                    <li>Blend of FPS action and ancient mythology</li>
                    <li>Cooperative gameplay against mythical foes</li>
                    <li>Set in a beautifully reimagined Dubai</li>
                    <li>
                      Blockchain Integration: Unlock and trade powerful artifacts as NFTs, each with unique abilities
                      and lore, enhancing your gameplay and collection.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <OtherGames />
      </div>

      <Footer />
    </motion.section>
  );
};

export default Cryptocraft;
