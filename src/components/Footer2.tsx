import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { MdEmail } from "react-icons/md";
import { useTranslation } from "react-i18next";

const Footer2 = () => {
  const { t } = useTranslation();
  return (
    <footer className="w-full h-auto min-h-auto bg-black2 relative py-8 px-5 sm:py-12 md:mt-20 mt-10">
      <div className="max-w-[1300px] mx-auto w-full text-secondary flex justify-between px-5 lg:pr-12 gap-x-10 lg:flex-row flex-col ">
        <img
          src="/hero/logo.webp"
          alt="Logo"
          className="sm:w-auto w-28 mx-auto"
        />
      </div>

      <div className="max-w-[1300px] mx-auto w-full text-secondary font-primary sm:mt-9 mt-3">
        <p className="sm:text-xl text-xs text-center">
          {t("jurisdiction")}
        </p>

        <div className="text-secondary flex items-center justify-between gap-x-7 sm:gap-x-16 mt-8 mx-auto w-full sm:w-fit">
          <div className="flex items-center gap-x-[5px]">
            <MdEmail className="text-secondary text-2xl" />
            <a
              href="mailto:hello@lucidia.io"
              className="font-medium font-primary"
            >
              hello@lucidia.io
            </a>
          </div>

          <div className="flex items-center gap-x-[5px]">
            <HiOutlineDevicePhoneMobile className="text-secondary text-xl" />
            <p className="font-medium font-primary">347-519-5430</p>
          </div>
        </div>

        <div className="text-center">
          <h3 className="font-secondary text-sm font-semibold flex gap-x-2 mx-auto w-fit mt-10">
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

export default Footer2;
