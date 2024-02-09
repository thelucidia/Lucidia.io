// import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { MdEmail } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const general = [
    {
      title: t("privacy"),
      link: "privacy",
    },
    {
      title: t("terms"),
      link: "terms",
    },
    {
      title: t("token_sale"),
      link: "https://lucidia.io/token-sale-terms-and-conditions/",
    },
  ];

  const company = [
    {
      title: t("contact"),
      link: "contact@lucidia.io",
    },
    {
      title: t("frequent"),
      link: "",
    },
    {
      title: t("anti"),
      link: "",
    },
  ];

  return (
    <footer className="w-full h-auto min-h-auto bg-black2 relative sm:py-12 mt-20">
      <div className="max-w-[1400px] mx-auto w-full text-secondary flex px-5 lg:pr-12 gap-x-24 lg:flex-row flex-col ">
        <div className="mt-7 sm:mt-0">
          <img src="/hero/logo.webp" alt="Logo" className="sm:w-auto w-28" />
          <p className="font-primary font-regular max-w-[29rem] mt-3 sm:mt-7 text-xs md:text-xl">
            {t("jurisdiction")}
          </p>
          <div className="text-footergry flex items-center gap-x-7 sm:gap-x-16 mt-8">
            <div className="flex items-center gap-x-[5px]">
              <MdEmail className="text-secondary text-2xl" />
              <a
                href="mailto:hello@lucidia.io"
                className="font-medium font-primary"
              >
                hello@lucidia.io
              </a>
            </div>

            {/* <div className="flex items-center gap-x-[5px]">
              <HiOutlineDevicePhoneMobile className="text-secondary text-xl" />
              <p className="font-medium font-primary">347-519-5430</p>
            </div> */}
          </div>
        </div>

        <div className="font-primary flex gap-x-20 lg:flex-row flex-col gap-y-8 mt-11 lg:mt-14 ">
          <div className="">
            <h2 className="font-semibold text-[36px]">{t("general")}</h2>
            <ul className="flex flex-col gap-y-2 sm:gap-y-3 mt-4">
              {general.map((items, i) => {
                return (
                  <li
                    className="font-secondary cursor-pointer font-regular text-[20px] relative w-fit hover:text-primary transition-colors ease-in-out duration-300"
                    key={i}
                    onClick={() => {
                      navigate(`/${items.link}`);
                    }}
                  >
                    {items.title}
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="">
            <h2 className="font-semibold text-[36px]">{t("company")}</h2>
            <ul className="flex flex-col gap-y-2 sm:gap-y-3 mt-4">
              {company.map((items, i) => {
                return (
                  <li
                    className="font-secondary font-regular text-[20px] relative w-fit hover:text-primary transition-colors ease-in-out duration-300"
                    key={i}
                  >
                    <a
                      href={
                        items.title === "contact us"
                          ? "mailto:contact@lucidia.io"
                          : items.link
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className=""
                    >
                      {items.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto w-full text-secondary sm:mt-20 flex justify-between items-center sm:pb-0 pb-5 px-5 pt-12 sm:pt-0 ">
        <div className="">
          <h3 className="font-secondary text-sm font-semibold flex gap-x-2">
            © Lucidia 2023 <span>|</span> {t("rights")}
          </h3>
          <p className="text-[12px] text-footergry font-secondary mt-2">
            {t("jurisdiction")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
