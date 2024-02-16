import { motion } from "framer-motion";
// import Button from "../../components/Button";
// import { cn } from "../../utils";
import { useTranslation } from "react-i18next";
import { details } from "../../utils/types";
import { IoIosArrowRoundDown } from "react-icons/io";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import OtherGames from "../components/OtherGames";
import Button from "../components/Button";
import { cn } from "../utils/index";

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
      <div className="w-full min-h-[40vh] md:min-h-[60vh] lg:min-h-screen px-8 sm:px-auto p-5 font-primary relative text-secondary flex  justify-center bg-bg">
        <Nav />
        <div className="bg-video">
          <video
            className="w-full h-full object-cover absolute bottom-0 left-0 object-bottom"
            autoPlay
            muted
            loop
          >
            <source src="/video/zombie.mp4" type="video/mp4" />
          </video>
          <div className="md:max-w-[75%] reltive">
            <img
              src={"/curse/curseOFImg.png"}
              className="h-[31%] object-cover absolute top-[30%] left-[5.5%] object-top z-30"
            />
          
          </div>
        </div>

        <div className="max-w-xs sm:max-w-full w-full flex flex-col justify-end gap-y-8 sm:gap-y-8 md:translate-y-0 sm:translate-y-24 translate-y-24 md:gap-y-12 md:pb-10 items-start h-auto mx-auto z-10 mt-[4.5rem] sm:mt-[7rem] md:mt-[10rem] absolute bottom-5 left-[5.5%]">
          <Button className="w-full md:w-56" stretchOnMobile>
            {t("games.play_game")}
          </Button>
          <div className="flex justify-center items-center bottom-0	text-white">
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


      <div className="w-full h-auto px-8 py-10 -mb-20 md:mb-0">
        <div className="max-w-[1100px] pb-14 sm:pb-20 w-full min-h-screen mx-auto text-secondary font-primary justify-between flex gap-10 pt-16 md:flex-row flex-col-reverse">

          <div className="w-full md:space-y-7 space-y-4">
            <div className="border-primary border-[1px]">
              {/* <h1 className="text-xl md:text-5xl text-primary font-bold text-center p-4">
                {t("games.zombie.title")}
              </h1> */}
              <div className="p-4">
                <img
                  src={"/games/zombie/title2.png"}
                  className="h-[25%] object-cover"
                />
              </div>
              <p className="mt-2 p-4 bg-primary text-black text-base md:text-xl">
                {t("Curse Of The Pharaoh is an action/adventure/survival game set in a post-apocalyptic world overrun by zombies. Collect weapon, bullet, and fuel props. Travel throuhg open-world environment with different biomes.")}
              </p>
            </div>
            <h2 className="text-primary md:text-2xl text-xl font-bold">
              {t("Game Overview")} :
            </h2>
            <p className="text-base md:text-xl"  style={{marginTop: 5}}>
              {t("Curse Of The Pharaoh combines the fast-paced action of FPS games with the mystery of ancient mythology, all set in a futuristic Dubai landscape. Inspired by the intense cooperative gameplay of Left 4 Dead 2, navigate through ancient curses and futuristic challenges in this adrenaline-fueled adventure. Dive into Curse Of The Pharaoh")}
            </p>
            <h2 className="md:text-2xl text-xl text-primary font-bold">
              {t("Game Feature")} :
            </h2>

            <div className="text-base md:text-xl" style={{marginTop: 5}}>
            <ul class="list-disc pl-3">
                <li>Blend of FPS action and ancient mythology</li>
                <li>Cooperative gameplay against mythical foes</li>
                <li>Set in a beautifully reimagined Dubai</li>
                <li>Blockchain Integration: Unlock and trade powerful artifacts as NFTs, each with unique abilities and lore, enhancing your gameplay and collection.</li>
              </ul>
            </div>

            
          </div>
          <div className="w-full flex items-center md:flex-col md:gap-10 gap-4 justify-center md:justify-start">
            {[...new Array(3)].map((_, i) => (
              <img
                src={`/games/zombie/${i + 1}.webp`}
                alt={`Image${i + 1}`}
                className={cn("w-1/2 md:w-auto", {
                  "md:block hidden": i === 0,
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

export default CurseOfThe;
