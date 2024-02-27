import Footer2 from '../components/Footer2';
import Nav from '../components/Nav';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { useRef, useState } from 'react';
import { cn } from '../utils';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { details } from '../utils/types';
import React from 'react';
import Meta from '../views/Meta';

const Terms = () => {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();
  const ref = useRef<HTMLDivElement | null>(null);

  function scrollToElement(id: string, e: any, onMobile: boolean) {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const topPos = element.offsetTop - (ref.current?.offsetTop || 0);

      if (onMobile) {
        window.scrollTo({
          top: topPos - 60,
          behavior: 'smooth',
        });
        setOpen(false);
      } else {
        if (ref.current) {
          ref.current.scrollTo({
            top: topPos,
            behavior: 'smooth',
          });
        }
      }
    }
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
      className="w-full bg-bg min-h-screen font-primary"
    >
      <Meta title={t('meta.vision.title')} description={t('meta.vision.desc')} />
      <Nav />
      <div className="w-full min-h-[20vh] md:min-h-[30vh] border-red-500 h-full px-5 py-8 font-primary flex items-end justifty-center text-secondary sticky top-0 z-10">
        <img
          src={'/games/battlefury/terms_banner.png'}
          className="w-full h-full object-cover object-top absolute top-0 left-0"
        />

        <div className="w-full h-full absolute top-0 left-0 bg-black/20 z-10"></div>

        <h1 className="font-bold md:text-5xl text-2xl text-secondary relative z-10 w-fit h-fit text-center mx-auto md:mb-5">
          {t('terms_page.title')}
        </h1>
      </div>

      <div className="flex max-w-[1100px] mx-auto md:mt-6 text-secondary md:pb-20 lg:flex-row flex-col">
        <div
          className={cn(
            'lg:w-[50%] w-full xl:-ml-28 lg:max-h-full max-h-12 overflow-hidden px-10 transition-all ease-in-out duration-300 pb-7 lg:pb-0 fixed lg:relative bg-black lg:bg-transparent',
            { 'max-h-[29rem]': open },
          )}
        >
          <div
            className="w-full flex items-center justify-between lg:mt-0 mt-2"
            onClick={() => {
              setOpen((curr) => !curr);
            }}
          >
            <h1 className="md:text-[28px] text-base font-bold text-primary">{t('table')}</h1>
            <MdKeyboardArrowDown className="text-3xl lg:hidden block" />
          </div>

          <ul className="font-bold text-base md:text-xl mt-9 flex flex-col gap-y-3">
            {(t('terms_page.terms_data', { returnObjects: true }) as details[]).map((item) => (
              <React.Fragment key={item.title}>
                <a
                  href={`#${item.title}`}
                  className="hover:text-primary lg:block hidden"
                  onClick={(e) => scrollToElement(item.title, e, false)}
                >
                  <li className="">{item.title}</li>
                </a>

                <a className="hover:text-primary lg:hidden" onClick={(e) => scrollToElement(item.title, e, true)}>
                  <li className="">{item.title}</li>
                </a>
              </React.Fragment>
            ))}
          </ul>
        </div>
        <div className="w-full h-[1px] mb-8 mt-12 fixed bg-primary lg:hidden block"></div>
        <div className="w-full xl:-ml-2 pr-10 lg:pl-0 pl-10 lg:max-h-[30rem] overflow-y-scroll noscroll" ref={ref}>
          <div className="md:text-lg text-base flex flex-col gap-y-4 md:gap-y-10">
            {(t('terms_page.terms_data', { returnObjects: true }) as details[]).map((item) => (
              <div key={item.title} className="md:space-y-5 space-y-2" id={item.title}>
                <h1 className="font-bold text-base md:text-2xl text-primary">{item.title}</h1>
                <p className="font-regular text-base md:text-xl">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer2 />
    </motion.section>
  );
};

export default Terms;
