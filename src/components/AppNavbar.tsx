import { SA, US } from 'country-flag-icons/react/3x2';
import { motion } from 'framer-motion';
import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { IoCheckmarkSharp } from 'react-icons/io5';
// import { RiMenu3Fill } from 'react-icons/ri';
import { useLocation, useNavigate } from 'react-router-dom';
import { useOutsideClick } from '../hooks/useOutsideHook';
import { cn } from '../utils';
import LangDropdown from './LangDropdown';

const AppNavbar = ({ loggedin }: any) => {
  const prefix = loggedin ? 'after' : 'before';
  const { t, i18n } = useTranslation();
  const [hovering, setHovering] = useState(false);
  const [langActive, setLangActive] = useState(false);

  const langData = [
    {
      title: 'Eng',
      code: 'en',
      icon: US,
    },
    {
      title: 'Arb',
      code: 'ar',
      icon: SA,
    },
  ];

  const langSet = useCallback((value: boolean) => {
    setLangActive(value);
  }, []);

  const langRef = useOutsideClick(() => {
    setLangActive(false);
  });

  const navList = [
    {
      name: t('app-nav.home'),
      slug: 'home.html',
      paths: ['/home'],
      type: 'external',
    },
    {
      name: t('app-nav.games'),
      slug: 'games.html',
      type: 'external',
    },
    {
      name: t('app-nav.tournaments'),
      slug: 'tournaments.html',
      paths: ['/tournaments'],
      type: 'external',
    },
    {
      name: t('app-nav.marketplace'),
      slug: 'marketplace.html',
      paths: ['/marketplace'],
      type: 'external',
    },
    {
      name: t('app-nav.dev-tools'),
      slug: 'dev-tools.html',
      paths: ['/dev-tools'],
      type: 'external',
    },
    {
      name: t('app-nav.educational-portal'),
      slug: 'educational-portal.html',
      paths: ['/educational-portal'],
      type: 'external',
    },
    {
      name: t('app-nav.dao'),
      slug: 'dao.html',
      paths: ['/dao'],
      type: 'external',
    },
  ];

  const navDesktop = [
    {
      name: t('privacy'),
      slug: 'privacy',
      type: 'internal',
      link: 'https://github.com/interfinetwork/project-delivery-data/blob/main/Lucidia/Lucidia_AuditReport_InterFi.pdf',
    },
    {
      name: t('terms_page.title'),
      slug: 'terms',
      type: 'internal',
      link: 'https://github.com/interfinetwork/project-delivery-data/blob/main/Lucidia/Lucidia_AuditReport_InterFi.pdf',
    },
    {
      name: t('nav.faq'),
      slug: 'faq',
      type: 'internal',
      link: 'https://github.com/interfinetwork/project-delivery-data/blob/main/Lucidia/Lucidia_AuditReport_InterFi.pdf',
    },
  ];

  const { pathname } = useLocation();

  const [navDesktopActive, setNavDesktop] = useState(false);

  // const handleNav = () => {};

  // const handleNavDesktop = () => {
  //   setNavDesktop((curr) => !curr);
  // };

  const ref = useOutsideClick(() => {
    setNavDesktop(false);
  });

  const secondNav = ['/privacy', '/terms'];

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="w-full h-fit relative">
      <nav
        className={cn('w-full h-auto px-3 sm:px-5 xl:py-0 py-0  top-0 left-0 z-20 bg-black/20 backdrop-blur-md fixed')}
      >
        <div className="w-full px-6 mx-auto flex justify-between items-center py-4">
          <a href={`/${prefix}-login/home.html`} className="">
            <img src="/assets/image/logo.svg" alt="Logo" className="sm:w-auto w-24" />
          </a>

          <ul className="font-primary font-semibold text-sm sm:text-xl capitalize items-center gap-x-7 text-secondary xl:flex hidden">
            {!secondNav.includes(pathname) &&
              navList.map((items, i) => {
                return (
                  items.type === 'external' && (
                    <li
                      key={`second-nav-item-${i}`}
                      onClick={() => {
                        window.location.href = `/${prefix}-login/${items.slug}`;
                      }}
                      className={cn('cursor-pointer hover:text-primary', {
                        'text-primary': items.paths?.includes(pathname) || items.slug === pathname,
                      })}
                    >
                      {items.name}
                    </li>
                  )
                );
              })}
          </ul>

          {/* <button className="md:hidden flex" onClick={handleNav}>
              <RiMenu3Fill className="text-secondary text-3xl" />
            </button> */}

          <LangDropdown setActive={langSet} active={langActive} />

          {/* <button
              onClick={handleNavDesktop}
              className={cn('md:block hidden', {
                'pointer-events-none': navDesktopActive,
              })}
              id="nav-desktop"
            >
              <RiMenu3Fill className="text-secondary text-3xl" />
            </button> */}
        </div>
      </nav>

      <div className="fixed w-full mx-auto w-full top-0 xl:top-7 z-20 left-0 right-0">
        <div
          className={`w-[8rem] h-[8rem] md:block hidden backdrop-blur-md clipped bg-bl absolute z-20 top-16 transition-height ease-in-out duration-300 right-0 ${
            langActive ? 'max-h-[23rem]' : 'max-h-0'
          }`}
        >
          <div className=" bg-black/30 backdrop-blur-md rounded-2xl w-32 h-[99%] m-auto clipped" ref={langRef}>
            <div className="overflow-x-hidden max-h-[100%] w-full top-0 right-0">
              <ul className="font-primary text-lg p-4 px-7 w-full text-secondary">
                {langData.map((item, i) => (
                  <li
                    onMouseEnter={() => setHovering(true)}
                    onMouseLeave={() => setHovering(false)}
                    onClick={() => i18n.changeLanguage(item.code)}
                    className={cn(`flex items-center gap-1 cursor-pointer hover:text-primary`, {
                      '!text-white': hovering && i18n.language === item.code,
                      'text-primary pointer-events-none': i18n.language === item.code,
                    })}
                    key={`lang-item-${i}`}
                  >
                    <item.icon className="w-5" />
                    <h1 className="">{item.title}</h1>
                    {i18n.language === item.code && <IoCheckmarkSharp />}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div
          className={`w-[16rem] h-[23rem] clipped bg-bl absolute z-20 top-24 transition-height ease-in-out duration-300 right-0 ${
            navDesktopActive ? 'max-h-[22rem]' : 'max-h-0'
          }`}
        >
          <div
            className="absolute bg-black/10 backdrop-blur-md rounded-2xl w-[98%] h-[65%] left-0 top-0 right-0 bottom-0 clipped"
            ref={ref}
          >
            <div className="overflow-x-hidden max-h-[100%] w-full top-0 right-0">
              <ul className="font-secondary font-semibold uppercase p-4 px-7 w-full text-sm text-secondary">
                {navDesktop.map((items, i) => {
                  return items.type === 'external' ? (
                    <a
                      href={items.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full h-full hover:text-primary"
                      key={`nav-desktop-item-external-${i}`}
                    ></a>
                  ) : items.type === 'internal' ? (
                    <button
                      onClick={() => navigate(`/${items.slug}`)}
                      className="w-full h-full hover:text-primary text-left uppercase"
                      key={`nav-desktop-item-internal-${i}`}
                    >
                      <motion.li
                        initial={{ x: 100, opacity: 0 }}
                        animate={navDesktopActive ? { x: 0, opacity: 1 } : {}}
                        transition={{
                          duration: 0.7,
                          delay: 0.5 * (i * 0.1),
                          ease: [0.16, 0.77, 0.47, 0.97],
                        }}
                        className={`border-b-[1px] border-white/10 py-5`}
                      >
                        {items.name}
                      </motion.li>
                    </button>
                  ) : null;
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppNavbar;
