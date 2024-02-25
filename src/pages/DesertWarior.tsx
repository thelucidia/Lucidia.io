import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { IoIosArrowRoundDown } from 'react-icons/io';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import OtherGames from '../components/OtherGames';
import Button from '../components/Button';
import Meta from '../views/Meta';
import parse from 'html-react-parser';

const DesertWarior = () => {
  const { t } = useTranslation();

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
      className="w-full min-h-screen bg-bg"
    >
      <Meta title={t('meta.desert.title')} description={t('meta.desert.desc')} />
      <div className="w-full min-h-[40vh] md:min-h-[48vh] lg:min-h-[48vh] xl:min-h-screen px-8 sm:px-auto p-5 font-primary relative text-secondary flex  justify-center bg-bg">
        <Nav />
        <img
          src={'/games/desertwarior/DesertWarior.png'}
          className="w-full h-full object-content absolute left-0 object-top bottom-0"
        />

        <div className="max-w-xs sm:max-w-full w-full flex flex-col justify-end pt-[7rem] gap-y-2 sm:gap-y-7 md:translate-y-0 sm:translate-y-24 translate-y-24 md:gap-y-16 md:pb-10 items-center h-auto mx-auto z-10 mt-[.0rem] sm:mt-[6rem] md:mt-[10rem] absolute top-9">
          <img src="/games/battlefury/desertwarrior.svg" alt="" />

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

      <div className="w-full h-auto px-8 lg:py-10 md:py-[100px] py-[70px] mt-[-30px] relative z-200 desert-warriors-endless-text">
        <div className="container w-full mx-auto text-secondary font-primary -mt-16">
          <motion.div
            initial={{ x: -300 }}
            whileInView={{ x: 0 }}
            transition={{ type: 'spring', stiffness: 100 }}
            className="w-[60%] space-y-7"
          >
            <h2 className="text-[52px] text-primary font-bold leading-[130%] uppercase">
              {parse(t('games.desertWarior.fpsGame'))}
            </h2>
            <p className="text-white text-base md:text-xl">{t('games.desertWarior.fpsGameTitle')}</p>
          </motion.div>
        </div>
      </div>

      <div className="w-full h-[846px] px-8 lg:pt-10 bg-cover bg-top bg-no-repeat bg-[url('/games/desertwarior/deserGameOverview.png')]">
        <div className="container w-full mx-auto text-secondary font-primary py-[110px]">
          <motion.div
            initial={{ x: 300 }}
            whileInView={{ x: 0 }}
            transition={{ type: 'spring', stiffness: 100 }}
            className="lg:w-[60%] md:w-[70%] ml-auto"
          >
            <h2 className="text-3xl md:text-4xl text-white font-bold uppercase mt-24">
              {t('games.desertWarior.DesertGameOverview')}
            </h2>
            <p className="text-white text-base md:text-xl mt-[20px]">{parse(t('games.desertWarior.prop_title'))}</p>
            <p className="text-white text-base md:text-xl">{parse(t('games.desertWarior.prop_genre'))}</p>
            <p className="text-white text-base md:text-xl">{parse(t('games.desertWarior.prop_audience'))}</p>
            <p className="text-white text-base md:text-xl">{parse(t('games.desertWarior.prop_desc'))}</p>

            <h3 className="md:text-2xl text-white font-bold my-7">{t('games.desertWarior.uniqueSellingPoints')}</h3>
            <ul className=" text-base md:text-xl">
              {(
                t('games.desertWarior.points', {
                  returnObjects: true,
                }) as string[]
              ).map((items, i) => (
                <li className="list-disc marker:text-[#B28539] ml-6 leading-6" key={i}>
                  <span className="font-normal">{parse(items)}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>

      <div className="w-full h-auto px-8 lg:pt-10">
        <div className="container w-full mx-auto text-secondary font-primary py-[90px] px-16 relative overflow-hidden">
          <h1 className="inline-block text-5xl text-primary font-bold lt-border rb-border leading-3 py-6 mb-10">
            {t('games.desertWarior.title')} :
          </h1>
          <div className="grid grid-cols-2 gap-28">
            <motion.div className="w-full justify-start">
              <p className="text-[20px] leading-[1.25]">{t('games.desertWarior.desc')}</p>
              <p>
                <br />
              </p>
              <div className="text-white text-base md:text-xl">
                <ul className="list-disc marker:text-[#B28539] ml-6">
                  {(
                    t('games.desertWarior.Featuesdetails', {
                      returnObjects: true,
                    }) as string[]
                  ).map((items, i) => (
                    <li key={i} className="leading-[1.25]">
                      {parse(items)}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
            <motion.div className="w-full">
              <img className="w-full h-auto" src="/games/desertwarior/game-features-01.jpg" />
              <ul className="block flex flex-row gap-6 mt-[28px]">
                <li className="w-6 h-6 bg-primary"></li>
                <li className="w-6 h-6 bg-primary"></li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>

      <OtherGames />
      <Footer />
    </motion.section>
  );
};

export default DesertWarior;
