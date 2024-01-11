import { BsDiscord, BsTwitterX } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import Button from "../components/Button";
import { cn } from "../utils";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Button2 from "../components/Button2";

const Hero = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const community = [
    {
      link: "https://t.me/Lucidia_io",
      icon: <FaTelegramPlane />,
    },
    {
      link: "https://discord.com/invite/lucidia",
      icon: <BsDiscord />,
    },
    {
      link: "https://twitter.com/lucidia_io",
      icon: <BsTwitterX />,
    },
  ];

  const audited = [
    {
      name: "inter",
      link: "https://www.interfi.network/audits",
    },
    {
      name: "rev",
      link: "https://www.revoluzion.io/audit",
    },
  ];

  return (
    <section className="w-full min-h-screen px-8 sm:px-auto p-5 relative text-secondary flex items-start justify-center">
      <img
        src={"/hero/background.webp"}
        className="w-full h-full object-cover absolute top-0 left-0"
      />

      <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-b from-transparent to-bg z-10"></div>

      {/* <img src="/hero/herobg.webp" alt="Herobg" className="w-full h-full object-cover absolute top-0 left-0" /> */}

      <div className="max-w-[1100px] w-full h-auto mx-auto relative z-10 flex mt-[5rem] md:mt-[10rem] flex-col-reverse md:flex-row">
        <div className="w-full">
          <h1 className="font-primary text-3xl md:text-5xl 2xl:text-[44px] max-w-[40rem] 2xl:leading-[3.6rem] font-semibold md:block hidden">
            {t("hero_title")}
          </h1>

          <div className="max-w-[40rem] font-primary flex flex-col md:flex gap-y-4 md:gap-y-0 md:text-xl mt-4">
            <p className="">{t("hero_desc1")}</p>

            <p className="">{t("hero_desc2")}</p>
          </div>

          <div className="flex gap-x-3 mt-10 md:flex-row flex-col ">
            <a
              href="https://finance.lucidia.io/"
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              <Button className="w-full md:w-44" stretchOnMobile>
                {t("buy_lucid")}
              </Button>
            </a>

            <a
              href="https://drive.google.com/file/d/1pT08KRpvPwnQcxwyGktETCeH8HtZi08v/view"
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              <Button2 className="w-full md:w-44" stretchOnMobile>
                {t("token_allocation")}
              </Button2>
            </a>
          </div>

          <p
            className="md:text-left text-center mt-2 cursor-pointer"
            onClick={() => {
              navigate("/how");
            }}
          >
            {t("how_to_buy")}
          </p>

          <div className="mt-14 flex sm:items-start gap-x-4 md:justify-normal justify-between flex-row">
            <div className="">
              <h1 className="font-primary font-medium sm:text-base text-sm">
                {t("join_community")}
              </h1>
              <ul className="flex items-center gap-x-5 sm:gap-x-11 text-2xl mt-4">
                {community.map((items, i) => {
                  return (
                    <a
                      href={items.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:scale-[1.1] hover:text-primary transition-all ease-in-out duration-300"
                      key={i}
                    >
                      {items.icon}
                    </a>
                  );
                })}
              </ul>
            </div>
            <div className="h-16 w-[2px] bg-white md:block hidden mt-[4px]"></div>
            <div className="">
              <h1 className="font-primary font-medium sm:text-base text-sm">
                {t("audited_by")}
              </h1>
              <ul className="flex sm:items-center sm:flex-row gap-y-3 flex-col gap-x-7 text-2xl mt-2">
                {audited.map((items, i) => {
                  return (
                    <a
                      href={items.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className=""
                      key={i}
                    >
                      <img
                        src={`/hero/${items.name}.webp`}
                        alt={items.name}
                        className={cn("", {
                          "sm:w-auto w-16": i === 0,
                        })}
                        key={i}
                      />
                    </a>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>

        <div className="w-auto relative flex">
          <h1 className="font-primary text-3xl md:text-5xl 2xl:text-[72px] max-w-[40rem] 2xl:leading-[5.5rem] font-semibold md:hidden block">
            AI DRIVEN GAMEFI GOVERNED BY YOU
          </h1>
          <img
            src="/hero/hero.webp"
            alt="Hero"
            className=" top-0 object-contain shrink-0 w-[7rem] md:w-[40rem]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
