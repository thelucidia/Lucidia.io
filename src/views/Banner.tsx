import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { IoIosArrowRoundDown } from 'react-icons/io';

const Banner = ({ bg_path, title, content }: any) => {
  const { t } = useTranslation();
  console.log('console', bg_path, title, content);
  return (
    <section className="w-full min-h-screen px-8 sm:px-auto p-5 relative text-secondary flex items-start justify-center">
      <img className="w-full h-full object-cover absolute top-0 left-0" src={bg_path} />
      <div className="w-full h-auto m-auto relative z-10 flex mt-[12rem] md:mt-[20rem] flex-col-reverse md:flex-row">
        <div className="w-full">
          <h2
            dangerouslySetInnerHTML={{ __html: title }}
            className="font-primary text-3xl md:text-5xl 2xl:text-[52px] 2xl:leading-[3.6rem] font-semibold md:block text-center"
          ></h2>
          {content ?? (
            <div className="font-primary md:text-2xl mt-12 text-center font-medium tracking-wide">
              <p>{t('our_product.description')}</p>
            </div>
          )}
          <div className="mt-[4rem] flex justify-center items-center bottom-0	text-white">
            <div className="relative">
              {t('career.scroll')}{' '}
              <motion.span
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 10, opacity: 1 }}
                transition={{
                  duration: 1,
                  ease: 'easeIn',
                  times: [0, 0.2, 0.5, 0.8, 1],
                  repeat: Infinity,
                }}
                className="absolute"
              >
                <IoIosArrowRoundDown />
              </motion.span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
