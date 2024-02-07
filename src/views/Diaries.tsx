import { FaPlayCircle } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Diaries = () => {
  const { t } = useTranslation();
  return (
    <section className="">
    {/* <section className="w-full relative min-h-auto p-5 bg-bg font-primary text-secondary pt-5 sm:pt-24"> */}
      {/* <div className="max-w-[1140px] mx-auto w-full">
        <h1 className="md:text-5xl sm:text-4xl text-2xl font-bold">
          {t("diaries")}
        </h1>
        <div className="w-full flex h-[12rem] sm:h-[18rem] md:h-[22rem] gap-5 mt-7 md:mt-10">
          <div className="w-[42rem] bg-white/10 h-full grid place-content-center">
            <FaPlayCircle className="text-5xl opacity-50" />
          </div>
          <div className="flex-col gap-5 w-[25rem] h-full md:flex hidden">
            <div className="w-full h-full bg-white/10 grid place-content-center">
              <FaPlayCircle className="text-4xl opacity-50" />
            </div>
            <div className="w-full h-full bg-white/10 grid place-content-center">
              <FaPlayCircle className="text-4xl opacity-50" />
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default Diaries;
