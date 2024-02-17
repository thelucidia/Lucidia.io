import { motion } from 'framer-motion';
// import Button from "../../components/Button";
import Footer from '../../components/Footer';
import Nav from '../../components/Nav';
import OtherGames from '../../components/OtherGames';
// import { cn } from "../../utils";
import { useTranslation } from 'react-i18next';
import { details } from '../../utils/types';
import Button from '../../components/Button';
import { IoIosArrowRoundDown } from 'react-icons/io';

const Lucidcraft = () => {
  const { t } = useTranslation();

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
      className="w-full min-h-screen bg-bg"
    >
      <div className="w-full min-h-[40vh] md:min-h-[60vh] lg:min-h-screen px-8 sm:px-auto p-5 font-primary relative text-secondary flex flex-col  justify-center bg-bg">
        <Nav />
        <img
          src={'/games/lucidcraft/banner.png'}
          className="w-full h-full object-cover absolute top-0 left-0 object-top"
        />

        <img
          src={'/games/lucidcraft/title.png'}
          className="w-[40%] object-cover absolute top-[45%] left-[30%] object-top"
        />
        <div className="flex justify-center mt-52 flex-col items-center">
          <Button children="Play Game" />
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

      <div className="w-full px-8 py-10 bg-[url('/games/lucidcraft/grid_background.png')]">
        <div className="max-w-[1100px] w-full mx-auto text-secondary font-primary justify-between flex gap-10 pt-16 md:flex-row flex-col-reverse">
          <div className="w-full md:space-y-7 space-y-4">
            <div className="flex flex-col justify-center items-center text-center md:space-y-7 space-y-4">
              <img src={'/games/lucidcraft/title2.png'} className="w-[40%] object-cover" />
              <p className=" text-base md:text-xl">{t('games.lucid.desc')}</p>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-16">
              <div className="flex flex-col md:space-y-7 space-y-4">
                <img src={'/games/lucidcraft/game_overview.png'} className="w-full object-cover" />
                <img src={'/games/lucidcraft/game_overview_text.png'} className="w-[40%] object-cover" />
                <div className="text-base md:text-xl">
                  {/* <p className="">{t("games.lucid.overview")}</p> */}
                  <p className="">
                    <b className="text-primary">{t('games.lucid.mech')}:</b> {t('games.lucid.overview2')}
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:space-y-7 space-y-4">
                {/* <h2 className="md:text-2xl text-xl text-primary font-bold">
                  {t("game_details")} :
                </h2> */}
                <img src={'/games/lucidcraft/game_detail.png'} className="w-full object-cover" />

                <img src={'/games/lucidcraft/game_detail_text.png'} className="w-[40%] object-cover" />

                <div className=" text-base md:text-xl">
                  {(
                    t('games.lucid.details', {
                      returnObjects: true,
                    }) as details[]
                  ).map((items, i) => (
                    <div className="flex gap-1" key={i}>
                      <h1 className="">
                        <b className="text-primary">{items.title}:</b> <span>{items.value}</span>
                      </h1>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* <div className=" text-base md:text-xl">
              {(
                t("games.zombie.details2", { returnObjects: true }) as string[]
              ).map((items, i) => (
                <p className="" key={i}>
                  {items}
                </p>
              ))}
            </div> */}
          </div>
          {/* <div className="w-full flex items-center md:flex-col md:gap-10 gap-4 justify-center md:justify-start">
            {[...new Array(3)].map((_, i) => (
              <img
                src={`/games/lucidcraft/${i + 1}.webp`}
                alt={`Image${i + 1}`}
                className={cn("w-1/2 md:w-auto", {
                  "md:block hidden": i === 0,
                })}
              />
            ))}
          </div> */}
        </div>

        <OtherGames initialSlide={2} />
      </div>

      <Footer />
    </motion.section>
  );
};

export default Lucidcraft;
