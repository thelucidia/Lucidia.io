import Nav from "../../components/Nav";
import { useTranslation } from "react-i18next";
import { details } from "../../utils/types";

const HeroTeam = () => {
  const { t } = useTranslation("");

  return (
    <>
      <Nav />

      <section className="w-full min-h-screen px-8 sm:px-auto p-5 font-primary relative text-secondary flex  justify-center bg-bg">
        <img
          src={"/hero/background.webp"}
          className="w-full h-full object-cover absolute top-0 left-0"
        />
        <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-b from-transparent via-transparent to-black z-10"></div>

        <div className="max-w-[1100px] w-full h-auto mx-auto relative px-5 z-10 mt-[4.5rem] sm:mt-[7rem] md:mt-[10rem]">
          <h1 className="sm:text-5xl text-2xl font-bold">{t("team.about")}</h1>

          <div className="sm:mt-7 mt-4 space-y-10">
            {(t("team.about_data", { returnObjects: true }) as details[]).map(
              (items, i) => (
                <div className="" key={i}>
                  <h1 className="text-primary font-bold text-base sm:text-2xl">
                    {items.title}
                  </h1>
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
