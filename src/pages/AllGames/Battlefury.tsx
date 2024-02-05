import { motion } from "framer-motion";
// import Button from "../../components/Button";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import OtherGames from "../../components/OtherGames";
import { cn } from "../../utils";
import { useTranslation } from "react-i18next";
import { details } from "../../utils/types";
import Button from "../../components/Button";
import { BattleImages } from "../../components/Images";
import { Slider } from "../../components/BattlerfurySlider/BattleFurySlider";
import { IoIosArrowRoundDown } from "react-icons/io";
import Marquee from "react-fast-marquee";

const Battlefury = () => {
  const { t } = useTranslation();

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
      className="w-full min-h-screen bg-[#0F0F0F]"
    >
      <div className=" w-full min-h-[40vh] md:min-h-[60vh] lg:min-h-screen px-8 sm:px-auto p-5 font-primary relative text-secondary flex  justify-center bg-bg">
        <Nav />
        <img
          src={"/games/battlefury/banner.png"}
          className="w-full h-full object-cover absolute top-0 left-0 object-top z-10	 "
        />
        <div className="  w-full h-full absolute top-0 left-0 bg-gradient-to-b from-transparent via-transparent to-black/80 z-10"></div>
        <BattleImages
          defaultSrc="/games/battlefury/bars4.png"
          hoverSrc="/games/battlefury/layout1.png"
        />

        <div className="max-w-xs sm:max-w-full w-full flex flex-col justify-center gap-y-8 sm:gap-y-8 md:translate-y-0 sm:translate-y-24 translate-y-24 md:gap-y-12 md:pb-10 items-center h-auto mx-auto  z-10 mt-[4.5rem] sm:mt-[7rem] md:mt-[10rem] absolute  ">
          {/* <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[96px] text-center font-bold left-0 right-0">
            {t("battle")}
          </h1> */}
          <img src="/games/battlefury/logo.png" alt="" />

          <Button className="w-full md:w-56" stretchOnMobile>
            {t("games.play_game")}
          </Button>
          <div className="   flex justify-center items-center bottom-0	text-white	">
            <div className="relative">
              See Details{" "}
              <motion.span
                initial={{ y: -10 }}
                animate={{ y: 20 }}
                transition={{
                  duration: 1,
                  ease: "easeInOut",
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

      <div className="absolute left-[12.5%] top-[90vh] w-[40%] space-y-5 z-[100]">
        <h1 className="text-xl md:text-5xl text-primary font-bold">
          {t("battlefury_subtitle1")}
        </h1>
        <h1 className="text-xl md:text-5xl text-primary font-bold">
          {t("battlefury_subtitle2")}
        </h1>
        <p className=" text-base text-secondary md:text-xl">
          {t("games.battle.desc")}
        </p>
      </div>
      <Marquee   play autoFill={true} className="text-primary font-semibold	 text-7xl     ">
        <Slider />
        <Slider />
        <Slider />
        <Slider />
        <Slider />
        <Slider />
        <Slider />
      </Marquee>
      <div className="relative w-full h-auto py-10 -mb-20 md:mb-0">
        <motion.img
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 0.5 }}
          transition={{ delay: 1 }}
          src={"/games/battlefury/game_overview.png"}
          className="w-full object-cover"
        />
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute right-40 top-[40vh] text-secondary w-[420px]"
        >
          <h2 className="text-primary md:text-3xl text-2xl font-bold">
            {t("overview")} :
          </h2>
          <div className=" text-base md:text-xl mt-8">
            <p className="">{t("games.battle.overview")}</p>
            <div className="mt-6">
              {(
                t("games.battle.overview_data", {
                  returnObjects: true,
                }) as details[]
              ).map((items) => (
                <p key={items.title}>
                  <b className="text-primary">{items.title}:</b> {items.value}
                </p>
              ))}
            </div>
          </div>
        </motion.div>
        <div className=" hidden w-full h-full absolute top-0 left-0 bg-gradient-to-r from-transparent via-transparent to-black/50 z-10"></div>
        <div className="max-w-[1100px] pb-14 sm:pb-20 w-full mx-auto pt-16">
          <h2 className="md:text-2xl text-xl text-primary font-bold">
            {t("game_details")} :
          </h2>
          <div className="pt-10 text-secondary font-primary justify-between flex gap-10 md:flex-row flex-col-reverse">
            <div className="w-full md:space-y-7 space-y-4">
              <div className=" text-base md:text-xl">
                {(
                  t("games.battle.details", {
                    returnObjects: true,
                  }) as details[]
                ).map((items, i) => (
                  <div className="flex gap-1" key={i}>
                    <h1 className="">
                      <b className="text-primary">{items.title}:</b>{" "}
                      <span>{items.value}</span>
                    </h1>
                  </div>
                ))}
              </div>

              <div className=" text-base md:text-xl">
                {(
                  t("games.battle.details2", {
                    returnObjects: true,
                  }) as string[]
                ).map((items, i) => (
                  <p className="" key={i}>
                    {items}
                  </p>
                ))}
              </div>
            </div>
            <div className="w-full flex items-center md:flex-col md:gap-10 gap-4 justify-center md:justify-start">
              {/* {[...new Array(3)].map((_, i) => (
              <img
                src={`/games/battlefury/${i + 1}.webp`}
                alt={`Image${i + 1}`}
                className={cn("w-1/2 md:w-auto", {
                  "md:block hidden": i === 0,
                })}
              />
            ))} */}
              <img
                src={`/games/battlefury/game_detail1.png`}
                alt={`Image1`}
                className={cn("w-1/2 md:w-auto")}
              />
            </div>
          </div>
        </div>
        <OtherGames initialSlide={3} />
      </div>

      <Footer />
    </motion.section>
  );
};

export default Battlefury;
