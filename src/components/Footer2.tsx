import { useTranslation } from 'react-i18next';

const Footer2 = () => {
  const { t } = useTranslation();
  return (
    <footer className="w-full h-auto min-h-auto bg-black2 relative py-8 px-5 sm:py-12 md:mt-20 mt-10">
      <div className="max-w-[90%] mx-auto w-full text-secondary flex justify-between px-5 lg:pr-12 gap-x-10 lg:flex-row flex-col ">
        <img src="/hero/logo.webp" alt="Logo" className="sm:w-auto w-28 mx-auto" />
      </div>

      <div className="max-w-[90%] mx-auto w-full text-secondary font-primary sm:mt-9 mt-3">
        <p className="sm:text-xl mb-16 font-[500] text-xs text-center">{t('jurisdiction')}</p>

        <div className="text-center">
          <h3 className="font-secondary text-[16px] mb-8 font-semibold flex gap-x-2 mx-auto w-fit mt-10">
            © Lucidia 2023 <span>|</span> {t('rights')}
          </h3>
        </div>
      </div>
    </footer>
  );
};

export default Footer2;
