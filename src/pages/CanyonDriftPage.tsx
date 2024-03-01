import { motion } from 'framer-motion';
import Button from '../components/Button';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import OtherGames from '../components/OtherGames';
import { useTranslation } from 'react-i18next';
import { IoIosArrowRoundDown } from 'react-icons/io';
import Meta from '../views/Meta';
import parse from 'html-react-parser';

const CanyonDriftPage = () => {
  const { t } = useTranslation();

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
      className="w-full min-h-screen bg-bg"
    >
      <Meta title={t('meta.sandstorm.title')} description={t('meta.sandstorm.desc')} />
      <div className="w-full min-h-[40vh] md:min-h-[48vh] lg:min-h-[48vh] xl:min-h-screen px-8 sm:px-auto p-5 font-primary relative text-secondary flex  justify-center bg-bg">
        <Nav />
        <img
          src={'/games/canyondrift/banner.jpg'}
          className="w-full h-full object-cover absolute top-0 left-0 object-top"
        />

        <div className="w-full h-full absolute top-0  left-0 bg-gradient-to-b from-transparent via-transparent to-black/80 z-10"></div>

        <div className="bg-[url('/games/canyondrift/ArrowLeft.png')] bg-no-repeat bg-bottom	max-w-xs sm:max-w-full w-full flex flex-col justify-end gap-y-[6rem] sm:gap-y-[4rem] md:translate-y-0 sm:translate-y-24 translate-y-24 md:gap-y-[8rem] md:pb-10 items-start h-auto mx-auto z-10 mt-[0rem] sm:mt-[7rem] md:mt-[10rem] absolute top-[] md:px-[6rem]">
          <img src="/games/canyondrift/sandstorm.svg" alt="" />

          <Button className="w-full md:w-56" stretchOnMobile>
            {t('games.play_game')}
          </Button>
          <div className="flex justify-center items-center bottom-0	text-white">
            <div className="relative">
              See Details{' '}
              <motion.span
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 10, opacity: 1 }}
                transition={{
                  duration: 1,
                  ease: 'easeIn',
                  times: [0, 0.2, 0.5, 0.8, 1],
                  repeat: Infinity,
                  repeatDelay: 0.1,
                }}
                className="absolute"
              >
                <IoIosArrowRoundDown />
              </motion.span>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full relative mt-[250px]">
        <img className="absolute w-full h-auto top-1/2 -translate-y-1/2" src="/games/sandstorm/bg-top.svg" />
        <div className="relative z-10 container mx-auto grid lg:grid-cols-12 gap-14">
          <motion.div
            initial={{ x: -300 }}
            whileInView={{ x: 0 }}
            transition={{ type: 'spring', stiffness: 100 }}
            className="col-span-5"
          >
            <h1 className="text-primary font-bold text-6xl">{parse(t('games.canyon.title'))}</h1>
            <p className="text-black text-xl mt-9">{t('games.canyon.desc')}</p>
          </motion.div>
          <div className="col-span-7 relative">
            <img className="w-full h-auto" src={'/games/canyondrift/ExperienceCar.jpg'} />
          </div>
        </div>
      </div>

      <div className="w-full relative my-[350px]">
        <img className="absolute w-full h-auto top-1/2 -translate-y-1/2" src="/games/sandstorm/bg-bottom.svg" />
        <div className="relative z-10 container mx-auto grid lg:grid-cols-12 gap-14">
          <motion.div
            initial={{ x: 300 }}
            whileInView={{ x: 0 }}
            transition={{ type: 'spring', stiffness: 100 }}
            className="col-span-5"
          >
            <h1 className="text-primary font-bold text-6xl mt-16">{t('games.canyon.gameFeaturesTitle')}</h1>
            <div className="text-black text-base md:text-xl">
              <ul className="list-disc pl-6 mt-9">
                {(t('games.canyon.gameFeaturesDetail', { returnObjects: true }) as string[]).map((items, i) => (
                  <li className="text-xl" key={i}>
                    {items}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
          <div className="col-span-7 relative lg:order-first">
            <img className="w-full h-auto" src={'/games/canyondrift/ExperienceCar.jpg'} />
          </div>
        </div>
      </div>

      <OtherGames initialSlide={0} />
      <Footer />
    </motion.section>
  );
};

export default CanyonDriftPage;
