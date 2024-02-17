import { motion } from "framer-motion";
import { useEffect } from "react";
import 'swiper/css';
import { useTranslation } from "react-i18next";
import { IoIosArrowRoundDown } from "react-icons/io";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import OtherGames from "../components/OtherGames";
import Button from "../components/Button";
import Swiper from "swiper/bundle";
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';


const DesertWarior = () => {
  const { t } = useTranslation();


  useEffect(() => {
    const mySwiper = new Swiper(".Game_Featues", {
      modules: [Navigation, Pagination],
      loop: true,
      slidesPerView: 1,
      // autoPlay: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

    return () => {
      mySwiper.destroy();
    };
  }, []);


  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
      className="w-full min-h-screen bg-bg"
    >
      <div className="w-full min-h-[40vh] md:min-h-[48vh] lg:min-h-[48vh] xl:min-h-screen px-8 sm:px-auto p-5 font-primary relative text-secondary flex  justify-center bg-bg">
        <Nav />
        <img
          src={"/games/desertwarior/DesertWarior.png"}
          className="w-full h-full object-content absolute left-0 object-top bottom-0"
        />

        <div className="max-w-xs sm:max-w-full w-full flex flex-col justify-end gap-y-2 sm:gap-y-7 md:translate-y-0 sm:translate-y-24 translate-y-24 md:gap-y-7 md:pb-10 items-center h-auto mx-auto z-10 mt-[.0rem] sm:mt-[6rem] md:mt-[10rem] absolute top-9">

          <div className="AndromedaFonts text-4xl sm:text-7xl md:text-5xl lg:text-[96px] text-left font-bold left-0 right-0 items-center">
            {t("desertW")}
          </div>

          <Button className="w-full md:w-56" stretchOnMobile>
            {t("games.play_game")}
          </Button>
          <div className="flex justify-center items-center bottom-0	text-white	">
            <div className="relative">
              See Details{" "}
              <motion.span
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 10, opacity: 1 }}
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


      <div className="w-full h-auto px-8 lg:py-10 md:py-[100px] py-[70px] bg-cover bg-center bg-no-repeat bg-[url('/games/desertwarior/DesertWariorsendlesstext.png')] mt-[-30px] relative z-200">
        <div className="max-w-[1100px] w-full mx-auto text-secondary font-primary">
          <motion.div
            initial={{ x: -300 }}
            whileInView={{ x: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="lg:w-[60%] md:w-[70%] lg:space-y-7 space-y-2"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-primary font-bold uppercase lg:w-[70%]">
              {t("ExploreDesert")}
            </h1>
            <p className="text-white text-base md:text-xl">
              {t("ExploreDesertTitle")}
            </p>
          </motion.div>
        </div>
      </div>


      <div className="w-full h-auto px-8 lg:pt-10 bg-cover bg-top bg-center bg-no-repeat bg-[url('/games/desertwarior/deserGameOverview.png')] mt-[-50px]">
        <div className="max-w-[1100px] w-full mx-auto text-secondary font-primary py-[110px]">
          <motion.div
            initial={{ x: 300 }}
            whileInView={{ x: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="lg:w-[60%] md:w-[70%] ml-auto lg:space-y-7 space-y-2"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-primary font-bold">
              {t("DesertGameOverview")}
            </h1>
            <p className="text-white text-base md:text-xl">
              {t("DesertGameOverviewTitle")}
            </p>
          </motion.div>
        </div>
      </div>


      <div className="w-full h-auto px-8 lg:pt-10">
        <div className="max-w-[1100px] w-full mx-auto text-secondary font-primary py-[90px] relative overflow-hidden">


          <div className="swiper-container Game_Featues">
            <div className="swiper-wrapper">

              <div className="swiper-slide">
                <div className="w-full mx-auto text-secondary font-primary justify-between md:flex gap-10 md:flex-row">
                
                  <motion.div
                  
                    className="w-full lg:space-y-7 space-y-2 flex justify-center flex-col max-w-md"
                  >
                    <h1 className="text-3xl md:text-4xl lg:text-5xl text-primary font-bold">
                      {t("games.desertWarior.title")} :
                    </h1>

                    <div className="text-white text-base md:text-xl">
                      {(
                        t("games.desertWarior.Featuesdetails", { returnObjects: true }) as string[]
                      ).map((items, i) => (
                        <ul className="list-disc pl-3" key={i}>
                          <li>{items}</li>
                        </ul>
                      ))}
                    </div>
                  </motion.div>
                  <div className="w-full mt-10 md:mt-0">
                    <img
                      src={"/games/canyondrift/ExperienceCar.png"}
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
              

              {/* tow */}
              <div className="swiper-slide">
                <div className="w-full mx-auto text-secondary font-primary justify-between md:flex gap-10 md:flex-row">
                
                  <motion.div
                   
                    className="w-full lg:space-y-7 space-y-2 flex justify-center flex-col max-w-md"
                  >
                    <h1 className="text-3xl md:text-4xl lg:text-5xl text-primary font-bold">
                      {t("games.desertWarior.title")} :
                    </h1>

                    <div className="text-white text-base md:text-xl">
                      {(
                        t("games.desertWarior.Featuesdetails", { returnObjects: true }) as string[]
                      ).map((items, i) => (
                        <ul className="list-disc pl-3" key={i}>
                          <li>{items}</li>
                        </ul>
                      ))}
                    </div>
                  </motion.div>
                  <div className="w-full mt-10 md:mt-0">
                    <img
                      src={"/games/canyondrift/ExperienceCar.png"}
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
              
              {/* three */}
              <div className="swiper-slide">
                <div className="w-full mx-auto text-secondary font-primary justify-between md:flex gap-10 md:flex-row">
                
                  <motion.div
                   
                    className="w-full lg:space-y-7 space-y-2 flex justify-center flex-col max-w-md"
                  >
                    <h1 className="text-3xl md:text-4xl lg:text-5xl text-primary font-bold">
                      {t("games.desertWarior.title")} :
                    </h1>

                    <div className="text-white text-base md:text-xl">
                      {(
                        t("games.desertWarior.Featuesdetails", { returnObjects: true }) as string[]
                      ).map((items, i) => (
                        <ul className="list-disc pl-3" key={i}>
                          <li>{items}</li>
                        </ul>
                      ))}
                    </div>
                  </motion.div>
                  <div className="w-full mt-10 md:mt-0">
                    <img
                      src={"/games/canyondrift/ExperienceCar.png"}
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
              
            </div>
            <div className="swiper-pagination desertSwiperDot"></div>
          </div>


        </div>
      </div>


      <OtherGames />
      <Footer />
    </motion.section>
  );
};

export default DesertWarior;
