import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { IoIosArrowRoundDown } from 'react-icons/io';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import OtherGames from '../components/OtherGames';
import Button from '../components/Button';
import { cn } from '../utils/index';
import Meta from '../views/Meta';
import parse from 'html-react-parser';

const CurseOfThe = () => {
  const { t } = useTranslation();
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
      className="w-full min-h-screen bg-bg"
    >
      <Meta title={t('meta.curse.title')} description={t('meta.curse.desc')} />
      <div className="w-full min-h-[40vh] md:min-h-[48vh] lg:min-h-[48vh] xl:min-h-screen px-8 sm:px-auto p-5 font-primary relative text-secondary flex  justify-center bg-bg">
        <Nav />
        <div className="bg-video">
          <video className="w-full h-full object-cover absolute bottom-0 left-0 object-bottom" autoPlay muted loop>
            <source src="/video/zombie.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="max-w-xs sm:max-w-full w-full flex flex-col justify-end gap-y-[7rem] sm:gap-y-[7rem] md:translate-y-0 sm:translate-y-24 translate-y-24 md:gap-y-[6.5rem] md:pb-10 items-start h-auto mx-auto z-10 mt-[0rem] sm:mt-[7rem] md:mt-[15rem] absolute top-5 md:px-[8rem]">
          <div className="reltive">
            <img src={'/curse/curseOFImg.png'} className="lg:h-[170px] h-[80px] pl-12 object-cover object-top" />
          </div>

          <Button className="w-full md:w-56" stretchOnMobile>
            {t('games.play_game')}
          </Button>
          <div className="flex justify-center items-center text-white">
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

      <div className="container mx-auto grid grid-cols-12 gap-24 mt-32">
        <div className="col-span-7 text-[#f0f0f0]">
          <div className="border-primary border-[1px]">
            <div className="p-[21px_33px] flex aligns-center justify-center">
              <img src={'/games/zombie/you-have-to-survive.svg'} className="h-[25%] object-cover" />
            </div>
            <p className="p-4 bg-primary text-black text-base md:text-xl">{t('games.zombie.desc')}</p>
          </div>
          <h2 className="text-[40px] mt-12">{t('curse_game.unleash')}</h2>
          <h2 className="md:text-2xl text-xl font-bold mt-6">{t('curse_game.overview')} :</h2>
          <p className="text-base md:text-xl">{parse(t('curse_game.prop_title'))}</p>
          <p className="text-base md:text-xl">{parse(t('curse_game.prop_genre'))}</p>
          <p className="text-base md:text-xl">{parse(t('curse_game.prop_setting'))}</p>

          <h2 className="md:text-2xl text-xl font-bold mt-6">{t('curse_game.points_title')} :</h2>
          <ul className="list-disc">
            <li className="text-base md:text-xl ml-6 marker:text-[#B28539]">
              {parse(t('curse_game.dubai_reimagined'))}
            </li>
            <li className="text-base md:text-xl ml-6 marker:text-[#B28539]">{parse(t('curse_game.mythological'))}</li>
            <li className="text-base md:text-xl ml-6 marker:text-[#B28539]">{parse(t('curse_game.narrative'))}</li>
            <li className="text-base md:text-xl ml-6 marker:text-[#B28539]">
              {parse(t('curse_game.web3_integration'))}
            </li>
          </ul>

          <h2 className="md:text-2xl text-xl font-bold mt-6">{t('curse_game.gameplay_mechanics')} :</h2>
          <p className="text-base md:text-xl">{parse(t('curse_game.mechanics_desc'))}</p>
          <ul className="list-disc">
            <li className="text-base md:text-xl ml-6 marker:text-[#B28539]">
              {parse(t('curse_game.advanced_movement'))}
            </li>
            <li className="text-base md:text-xl ml-6 marker:text-[#B28539]">
              {parse(t('curse_game.strategic_combat'))}
            </li>
            <li className="text-base md:text-xl ml-6 marker:text-[#B28539]">
              {parse(t('curse_game.cooperative_mission'))}
            </li>
          </ul>
        </div>
        <div className="col-span-5 flex flex-col gap-16 items-center justify-center">
          {[...new Array(4)].map((_, i) => (
            <img
              src={`/games/zombie/right_post0${i + 1}.jpg`}
              alt={`Image${i + 1}`}
              className="w-full h-auto"
              key={i}
            />
          ))}
        </div>
      </div>

      <OtherGames />

      <Footer />
    </motion.section>
  );
};

export default CurseOfThe;
