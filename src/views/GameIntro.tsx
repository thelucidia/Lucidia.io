import { useTranslation } from "react-i18next";

const GameIntro = () => {
  const { t } = useTranslation();
  return (
    <section className="w-full h-auto pt-10 sm:pt-20 lg:pt-12 lg:pb-16 bg-[#171717] relative flex items-center font-primary text-secondary px-5">
      <div className="md:w-[75%] w-fit mx-auto flex flex-col">
        <h1 className="font-bold text-2xl sm:text-2xl md:text-3xl">
          {t("game")}
        </h1>
        <div className="pt-8 grid md:grid-cols-2 grid-cols-1 gap-x-12 2 gap-y-8 justify-items-stretch">
          <img
            src="/games/zombie_outbreak.png"
            alt="Hero"
            className=" top-0 object-contain shrink-0 hover:cursor-pointer"
          />
          <img
            src="/games/lucidcraft.png"
            alt="Hero"
            className=" top-0 object-contain shrink-0 hover:cursor-pointer"
          />
          <img
            src="/games/battlefury.png"
            alt="Hero"
            className=" top-0 object-contain shrink-0 hover:cursor-pointer"
          />
          <img
            src="/games/canyon_drift.png"
            alt="Hero"
            className=" top-0 object-contain shrink-0 hover:cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
};

export default GameIntro;
