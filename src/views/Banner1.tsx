import { useTranslation } from "react-i18next";

const Banner1 = () => {
  const { t } = useTranslation();
  const bannerData = [
    {
      title: "$1M+",
      desc: t("to_be"),
    },
    {
      title: "115M",
      desc: t("in_game"),
    },

    {
      title: "6+",
      desc: t("game_inside"),
    },
    {
      title: "60+",
      desc: t("maps"),
    },
  ];
  return (
    <section className="w-full h-auto pt-10 sm:pt-20 lg:pt-20 lg:pb-14 bg-bg relative flex items-center font-primary text-secondary px-5">
      <div className="mx-auto w-fit flex text-center gap-4 sm:gap-10 md:gap-16">
        {bannerData.map((items, i) => (
          <div className="flex flex-col justify-start gap-2" key={i}>
            <h1 className="text-primary sm:text-4xl md:text-5xl text-xl font-bold">
              {items.title}
            </h1>
            <p className="md:text-2xl sm:text-lg text-xs">{items.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Banner1;
