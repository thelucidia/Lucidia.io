import { motion } from 'framer-motion';
import Button from '../../components/Button';
import Footer from '../../components/Footer';
import Nav from '../../components/Nav';
import OtherGames from '../../components/OtherGames';
import parse from 'html-react-parser';
import { useTranslation } from 'react-i18next';
import { IoIosArrowRoundDown } from 'react-icons/io';
import Meta from '../../views/Meta';

const CanyonDrift = () => {
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
      <div className="w-full min-h-[40vh] md:min-h-[60vh] lg:min-h-screen px-8 sm:px-auto p-5 font-primary relative text-secondary flex  justify-center bg-bg">
        <Nav />
        <img
          src={'/games/canyondrift/banner.jpg'}
          className="w-full h-full object-cover absolute top-0 left-0 object-top"
        />
        <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-b from-transparent via-transparent to-black/80 z-10"></div>

        <div className="bg-[url('/games/canyondrift/arrow.png')] bg-no-repeat bg-bottom		 max-w-xs sm:max-w-full w-full flex flex-col justify-end gap-y-8 sm:gap-y-8 md:translate-y-0 sm:translate-y-24 translate-y-24 md:gap-y-12 md:pb-10 items-center h-auto mx-auto  z-10 mt-[4.5rem] sm:mt-[7rem] md:mt-[10rem]  absolute bottom-5">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[96px] text-center font-bold left-0 right-0">
            {t('canyon')}
          </h1>

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

      <div className="w-full h-auto px-8 py-10 -mb-20 md:mb-0 bg-cover	 bg-no-repeat	  bg-[url('/games/canyondrift/bg-1.png')]">
        <div className="max-w-[1100px] pb-14 sm:pb-20 w-full min-h-screen mx-auto text-secondary font-primary justify-between flex gap-10 pt-16 md:flex-row flex-col-reverse ">
          <motion.div
            initial={{ x: -300 }}
            whileInView={{ x: 0 }}
            transition={{ type: 'spring', stiffness: 100 }}
            className="w-full md:space-y-7 space-y-4 flex justify-center flex-col max-w-md	"
          >
            <h1 className="text-xl md:text-6xl text-primary font-bold  max-w-[60rem]">
              {parse(t('games.canyon.title'))}
            </h1>
            <p className="text-black text-base md:text-xl">{t('games.canyon.desc')}</p>
          </motion.div>

          <div className="w-full flex items-center md:flex-col md:gap-10 gap-4 justify-center md:justify-start"></div>
        </div>
      </div>

      <div className="w-full h-auto px-8 py-10 -mb-20 md:mb-0 bg-cover	 bg-no-repeat	  bg-[url('/games/canyondrift/bg-2.png')]">
        <div className="max-w-[1100px] pb-14 sm:pb-20 w-full min-h-screen mx-auto text-secondary font-primary justify-between flex gap-10 pt-16   flex-row-reverse">
          <motion.div
            initial={{ x: 300 }}
            whileInView={{ x: 0 }}
            transition={{ type: 'spring', stiffness: 100 }}
            className="w-full md:space-y-7 space-y-4 flex justify-center flex-col max-w-md"
          >
            <h1 className="text-xl md:text-6xl text-primary font-bold  ">{t('game_details')} :</h1>

            <div className="text-black text-base md:text-xl">
              {(t('games.canyon.gameFeaturesDetail', { returnObjects: true }) as string[]).map((items, i) => (
                <p className="" key={i}>
                  {items}
                </p>
              ))}
            </div>
          </motion.div>

          <div className="w-full flex items-center md:flex-col md:gap-10 gap-4 justify-center md:justify-start"></div>
        </div>
      </div>

      <OtherGames initialSlide={0} />
      <Footer />
    </motion.section>
  );
};

export default CanyonDrift;
