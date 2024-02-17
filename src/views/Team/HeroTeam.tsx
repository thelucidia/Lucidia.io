import Nav from "../../components/Nav";
import { useTranslation } from "react-i18next";
import { details } from "../../utils/types";
import { motion } from "framer-motion";
import { IoIosArrowRoundDown } from "react-icons/io";

const HeroTeam = () => {
  const { t } = useTranslation("");
  // update by freelance

  return (
    <>
      <Nav />
      <div className="relative">
        <img src={"/team.png"} className="w-full object-cover margin_top_88" />
        <div className="absolute w-full	h-full top-0 flex justify-center items-center flex-col	">
          <div className="relative ml-5 left-40">
            <div className="absolute border-l-4 border-black h-full right-72		 "></div>
            <motion.div
              initial={{ x: -600 }}
              animate={{ x: 0 }}
              transition={{ ease: "easeOut", duration: 1 }}
            >
              <p className="font-bold	text-3xl	 text-[#B28539]	">We are</p>
              <p className="font-bold text-7xl		text-[#B28539]	">LUCIDIA</p>
            </motion.div>
          </div>
        </div>
        <div className="absolute h-full w-full flex justify-center items-end bottom-0	text-black	mb-5">
          <div className="relative">
            Scroll Down{" "}
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
      <section className="w-full min-h-screen px-8 sm:px-auto p-5 font-primary relative text-secondary flex  justify-center bg-bg">
        <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-b from-transparent via-transparent to-black z-10"></div>

        <div className="max-w-[1100px] w-full h-auto mx-auto relative px-5 z-10 mt-[4.5rem] sm:mt-[7rem] md:mt-[10rem]">
          {/* <h1 className="sm:text-5xl text-2xl font-bold">{t("team.about")}</h1> */}

          <div className="sm:mt-7 mt-4 md:space-x-20 md:space-y-0 space-y-10 md:flex ">
            {(t("team.about_data", { returnObjects: true }) as details[]).map(
              (items, i) => (
                <div className="relative md:p-6 p-2" key={i}>
                  {/* additon by freelancer */}
                  <div className="absolute  bg-white h-24 w-24 top_p right_p  team-clip--triangle"></div>
                  <motion.div
                    initial={{ y: 0, x: 0 }}
                    whileInView={{ y: 400, x: -420 }}
                    transition={{ ease: "linear", duration: 1 }}
                    className="absolute  border-l-2 border-b-2 border-white h-24 w-24 right-0 "
                  ></motion.div>
                  <motion.h1
                    initial={{ y: -20 }}
                    whileInView={{ y: 0 }}
                    transition={{ ease: "linear", duration: 0.5 }}
                    className="text-primary font-bold text-3xl sm:text-5xl"
                  >
                    {items.title}
                  </motion.h1>
                  <p className="mt-4 text-base sm:text-2xl">{items.value}</p>
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroTeam;
