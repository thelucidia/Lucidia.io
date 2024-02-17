
import { useTranslation } from "react-i18next";
const Partners = () => {

  const { t } = useTranslation();
  const partners = [
    "unreal",
    "play",
    "g2",
    "rebel",
    "elephant",
    "uni",
    "hit",
    "pancake",
    "epic",
    "arc",
  ];

  return (
    <section className="bg-bg-w-full h-auto pt-10 sm:px-5 overflow-hidden font-primary text-secondary sm:pt-28">
      <div className="max-w-[1300px] w-full h-auto mx-auto">
        <div className="w-full h-auto sm:clipped2 bg-prpl relative flex items-center justify-center scale-x-[-1]">
          <div className="w-full h-full scale-x-[-1]">
            <h1 className="sm:text-5xl text-2xl font-bold text-center">
              {t("partners")}
            </h1>

            <div className="flex flex-wrap sm:gap-x-[8rem] gap-x-4  gap-y-[2.5rem] items-center justify-center py-9">
              {partners.map((items, i) => {
                return (

                  <img
                    src={`/partners/${items}.webp`}
                    alt="Partners"
                    className={`sm:w-[10rem] w-24`}
                    key={i}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
