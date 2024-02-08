import { SA, US } from "country-flag-icons/react/3x2";
import { motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { BsTwitterX } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { IoCheckmarkSharp } from "react-icons/io5";
import { LiaTelegramPlane } from "react-icons/lia";
import { MdClose, MdKeyboardArrowUp } from "react-icons/md";
import { RiMenu3Fill } from "react-icons/ri";
import { RxDiscordLogo } from "react-icons/rx";
import { useLocation, useNavigate } from "react-router-dom";
import { useOutsideClick } from "../hooks/useOutsideHook";
import { cn } from "../utils";
import Button2 from "./Button2";
import LangDropdown from "./LangDropdown";

const Nav = () => {
  const { t, i18n } = useTranslation();
  const [active, setActive] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [langActive, setLangActive] = useState(false);

  const langData = [
    {
      title: "Eng",
      code: "en",
      icon: US,
    },
    {
      title: "Arb",
      code: "ar",
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
      name: t("nav.home"),
      slug: "",
      paths: ["/"],
      type: "internal",
    },
    // {
    //   name: t("nav.pitchdeck"),
    //   slug: "pitchdeck",
    //   type: "external",
    //   link: "https://drive.google.com/file/d/1n1ddGOA5tTXVhK6zu7962QLSJBUev0aA/view",
    // },
    // {
    //   name: t("nav.roadmap"),
    //   slug: "roadmap",
    //   type: "external",
    //   link: "https://drive.google.com/file/d/1j_jqFpZlgmppz9CElg4KeSnmoR4uneqp/view",
    // },
    // {
    //   name: t("nav.games"),
    //   slug: "games",
    //   paths: [
    //     "/games",
    //     "/games/zombie-outbreak",
    //     "/games/lucidcraft",
    //     "/games/battlefury",
    //     "/games/canyon-drift",
    //   ],
    //   type: "internal",
    // },
    {
      name: t("nav.team"),
      slug: "team",
      paths: ["/team"],
      type: "internal",
    },
  ];

  const navPrivacy = [
    {
      name: t("nav.home"),
      slug: "",
      paths: ["/"],
      type: "internal",
    },
    {
      name: t("privacy_page.title"),
      paths: ["/privacy"],
      slug: "privacy",
      type: "intenral",
    },
    {
      name: t("terms_page.title"),
      paths: ["/terms"],
      slug: "terms",
      type: "internal",
    },
    // {
    //   name: t("nav.faq"),
    //   slug: "FAQ",
    //   paths: ["/team"],
    //   type: "internal",
    // },
  ];

  const navMobile = [
    {
      name: t("nav.home"),
      slug: "",
      type: "internal",
    },
    // {
    //   name: t("nav.pitchdeck"),
    //   slug: "pitchdeck",
    //   type: "external",
    //   link: "https://drive.google.com/file/d/1n1ddGOA5tTXVhK6zu7962QLSJBUev0aA/view",
    // },
    // {
    //   name: t("nav.roadmap"),
    //   slug: "roadmap",
    //   type: "external",
    //   link: "https://drive.google.com/file/d/1j_jqFpZlgmppz9CElg4KeSnmoR4uneqp/view",
    // },
    {
      name: t("nav.team"),
      slug: "team",
      type: "internal",
    },
    // {
    //   name: t("nav.games"),
    //   slug: "games",
    //   type: "internal",
    // },
    {
      name: t("nav.gameplay"),
      slug: "gameplay",
      type: "external",
      link: "https://share.arcware.cloud/33034e19-bac7-4d3b-910b-e2c45c2eccd8",
    },
    {
      name: t("nav.audit"),
      slug: "audit",
      sub: [
        {
          title: "interfi",
          link: "https://github.com/interfinetwork/project-delivery-data/blob/main/Lucidia/Lucidia_AuditReport_InterFi.pdf",
        },
        {
          title: "revoluzion eth",
          link: "https://revoluzion.app/audits/presaleeth",
        },
        {
          title: "revoluzion bsc",
          link: "https://revoluzion.app/audits/presalebsc",
        },
      ],
    },
    {
      name: t("privacy"),
      slug: "privacy",
      type: "internal",
    },
    {
      name: t("terms_page.title"),
      slug: "terms",
      type: "internal",
    },
    // {
    //   name: t("nav.faq"),
    //   slug: "faq",
    //   type: "internal",
    // },
  ];

  const navDesktop = [
    {
      name: t("nav.gameplay"),
      slug: "gameplay",
      type: "external",
      link: "https://share.arcware.cloud/33034e19-bac7-4d3b-910b-e2c45c2eccd8",
    },
    {
      name: t("nav.audit"),
      slug: "audit",
      sub: [
        {
          title: "interfi",
          link: "https://github.com/interfinetwork/project-delivery-data/blob/main/Lucidia/Lucidia_AuditReport_InterFi.pdf",
        },
        {
          title: "revoluzion eth",
          link: "https://revoluzion.app/audits/presaleeth",
        },
        {
          title: "revoluzion bsc",
          link: "https://revoluzion.app/audits/presalebsc",
        },
      ],
    },
    {
      name: t("privacy"),
      slug: "privacy",
      type: "internal",
    },
    {
      name: t("terms_page.title"),
      slug: "terms",
      type: "internal",
    },
    {
      name: t("nav.faq"),
      slug: "faq",
      type: "internal",
    },
  ];

  const icons = [
    {
      link: "",
      icon: <LiaTelegramPlane />,
    },
    {
      link: "",
      icon: <RxDiscordLogo />,
    },
    {
      link: "",
      icon: <BsTwitterX />,
    },
  ];
  const [audit, setAudit] = useState(false);
  const { pathname } = useLocation();
  const navRef = useOutsideClick(() => {
    setNav(false);
  });

  const handleAudit = () => {
    setAudit((curr) => !curr);
  };

  const [navActive, setNav] = useState(false);
  const [navDesktopActive, setNavDesktop] = useState(false);

  const handleNav = () => {
    setNav((curr) => !curr);
  };

  const handleNavDesktop = () => {
    setNavDesktop((curr) => !curr);
  };

  const ref = useOutsideClick(() => {
    setNavDesktop(false);
  });

  const secondNav = ["/privacy", "/terms"];

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="w-full h-fit relative">
      <nav
        ref={navRef}
        className={`-full w-[80vw] font-primary h-screen right-0 top-0 bottom-0 bg-bg z-30 fixed transition-all  ease-in-out duration-500 ${navActive ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="w-full h-[5rem] bg-prpl flex items-center justify-between px-4">
          <img src="/hero/logo.webp" alt="Logo" className="w-24" />
          <MdClose
            className="text-white text-5xl cursor-pointer"
            onClick={handleNav}
          />
        </div>

        <div className="overflow-auto max-h-[90%] w-full pb-20 top-0 right-0 font-primary  overflow-x-hidden">
          <ul className="text-secondary font-secondary font-semibold uppercase px-7 w-full pt-12 text-lg">
            {navMobile.map((items, i) => {
              return items.type === "external" ? (
                <a
                  href={items.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full h-full"
                  key={i}
                >
                  <motion.li
                    initial={{ x: 100, opacity: 0 }}
                    animate={navActive ? { x: 0, opacity: 1 } : {}}
                    transition={{
                      duration: 0.7,
                      delay: 0.5 * (i * 0.1),
                      ease: [0.16, 0.77, 0.47, 0.97],
                    }}
                    className={`border-t-[1px] border-white/10 py-5 ${items.name === "faq" ? "border-b-[1px]" : ""
                      } `}
                  >
                    {items.name}
                  </motion.li>
                </a>
              ) : items.type === "internal" ? (
                <motion.li
                  initial={{ x: 100, opacity: 0 }}
                  animate={navActive ? { x: 0, opacity: 1 } : {}}
                  transition={{
                    duration: 0.7,
                    delay: 0.5 * (i * 0.1),
                    ease: [0.16, 0.77, 0.47, 0.97],
                  }}
                  key={i}
                  onClick={() => {
                    navigate(`/${items.slug}`);
                  }}
                  className={`border-t-[1px] border-white/10 py-5 ${items.name === "faq" ? "border-b-[1px]" : ""
                    } `}
                >
                  {items.name}
                </motion.li>
              ) : items.slug === "audit" ? (
                <motion.li
                  initial={{ x: 100, opacity: 0 }}
                  animate={navActive ? { x: 0, opacity: 1 } : {}}
                  transition={{
                    duration: 0.7,
                    delay: 0.5 * (i * 0.1),
                    ease: [0.16, 0.77, 0.47, 0.97],
                  }}
                  className={`border-t-[1px] border-white/10 py-5 group`}
                  onClick={handleAudit}
                  key={i}
                >
                  <div className="w-full flex justify-between items-center cursor-pointer text-white">
                    <p className="">{items.name}</p>
                    <MdKeyboardArrowUp
                      className={`text-2xl transition-all ease-in-out duration-300  ${audit ? "rotate-0" : "rotate-180"
                        }`}
                    />
                  </div>
                  <div
                    className={`text-footergry  flex flex-col gap-y-2  overflow-hidden transition-all ease-in-out duration-300 ${audit ? "max-h-[5rem] mt-4" : "max-h-0 mt-0"
                      } `}
                  >
                    {items.sub?.map((items, i) => {
                      return (
                        <a
                          href={items.link}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="hover:text-secondary"
                          key={i}
                        >
                          {items.title}
                        </a>
                      );
                    })}
                  </div>
                </motion.li>
              ) : null;
            })}
            ====
            <motion.li
              initial={{ x: 100, opacity: 0 }}
              animate={navActive ? { x: 0, opacity: 1 } : {}}
              transition={{
                duration: 0.7,
                delay: 0.5 * 0.9,
                ease: [0.16, 0.77, 0.47, 0.97],
              }}
              className="border-t-[1px] border-white/10 pt-5"
            >
              {langData.map((item) => (
                <div
                  className="flex gap-x-1 items-center"
                  key={item.code}
                  onClick={() => {
                    setActive((curr) => !curr);
                  }}
                >
                  {i18n.language === item.code && (
                    <>
                      <item.icon className="w-5" />
                      <h1 className="capitalize">{item.title}</h1>
                      <IoIosArrowDown className="text-xl" />
                    </>
                  )}
                </div>
              ))}
            </motion.li>
          </ul>

          <div
            className={`w-full bg-bl z-10 transition-height ease-in-out duration-300 overflow-hidden ${active ? "max-h-[10rem]" : "max-h-0"
              }`}
          >
            <div className="overflow-x-hidden max-h-[100%] w-full">
              <ul className="font-secondary text-lg p-4 px-7 space-y-2 w-full text-secondary">
                {langData.map((item) => (
                  <li
                    onClick={() => {
                      i18n.changeLanguage(item.code);
                      setActive(false);
                    }}
                    className={cn(
                      `flex items-center gap-1 cursor-pointer hover:text-primary text-lg`,
                      {
                        "text-primary pointer-events-none":
                          i18n.language === item.code,
                      }
                    )}
                    key={item.code}
                  >
                    <item.icon className="w-5" />
                    <h1 className="">{item.title}</h1>
                    {i18n.language === item.code && <IoCheckmarkSharp />}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="font-primary text-center px-6 mt-10 text-white">
            <h2 className="font-semibold">{t("join")}</h2>
            <p className="font-medium text-secondary mt-6">{t("for")}</p>

            <div className="text-secondary flex mx-auto w-fit mt-5 gap-x-6 text-2xl">
              {icons.map((items, i) => {
                return (
                  <a
                    href={items.link}
                    target="_blank"
                    rel="noopener noreferer"
                    className=""
                    key={i}
                  >
                    {items.icon}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </nav>

      <nav
        className={cn(
          "w-full h-auto px-3 sm:px-5 xl:py-4 py-0  top-0 left-0 z-20 bg-black/20 backdrop-blur-md fixed"
        )}
      >
        <div className="max-w-[1400px] w-full mx-auto flex justify-between items-center py-4">
          <a href="/" className="">
            <img src="/hero/logo.webp" alt="Logo" className="sm:w-auto w-24" />
          </a>

          <div className="flex items-center md:gap-x-8 relative">
            <ul className="font-primary font-semibold text-sm sm:text-lg capitalize items-center gap-x-7 text-secondary xl:flex hidden">
              {!secondNav.includes(pathname)
                ? navList.map((items, i) => {
                  return items.type === "external" ? (
                    <>
                      {/* <a
                          href={items.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-primary"
                          key={i}
                        >
                          <li className="cursor-pointer" key={i}>
                            {items.name}
                          </li>
                        </a> */}
                    </>
                  ) : (
                    <li
                      key={i}
                      onClick={() => {
                        navigate(`/${items.slug}`);
                      }}
                      className={cn("cursor-pointer hover:text-primary hover_text_border_bottom", {
                        "text-primary text_border_bottom":
                          items.paths?.includes(pathname) ||
                          items.slug === pathname,
                      })}
                    >
                      {items.name}
                    </li>
                  );
                })
                : navPrivacy.map((items, i) => (
                  <li
                    key={i}
                    onClick={() => {
                      navigate(`/${items.slug}`);
                    }}
                    className={cn("cursor-pointer hover:text-primary", {
                      "text-primary":
                        items.paths?.includes(pathname) ||
                        items.slug === pathname,
                    })}
                  >
                    {items.name}
                  </li>
                ))}
            </ul>

            <a
              href="https://t.me/Lucidia_io"
              target="_blank"
              rel="noopener noreferrer"
              className="md:block hidden"
            >
              <Button2 removeOnMobile>{t("nav.meet")}</Button2>
            </a>

            <a
              href="https://t.me/Lucidia_io"
              target="_blank"
              rel="noopener noreferrer"
              className="md:hidden block text-xs text-white mr-4"
            >
              {t("nav.meet")}
            </a>

            <button className="md:hidden flex" onClick={handleNav}>
              <RiMenu3Fill className="text-secondary text-3xl" />
            </button>

            <LangDropdown setActive={langSet} active={langActive} />

            <button
              onClick={handleNavDesktop}
              className={cn("md:block hidden", {
                "pointer-events-none": navDesktopActive,
              })}
              id="nav-desktop"
            >
              <RiMenu3Fill className="text-secondary text-3xl" />
            </button>
          </div>
        </div>
      </nav>

      <div className="fixed max-w-[1400px] mx-auto w-full top-0 xl:top-7 z-20 left-0 right-0">
        <div
          className={`w-[8rem] h-[8rem] md:block hidden backdrop-blur-md clipped bg-bl absolute z-20 top-24 transition-height ease-in-out duration-300 right-12 ${langActive ? "max-h-[23rem]" : "max-h-0"
            }`}
        >
          <div
            className=" bg-black/30 backdrop-blur-md rounded-2xl w-32 h-[99%] m-auto clipped"
            ref={langRef}
          >
            <div className="overflow-x-hidden max-h-[100%] w-full top-0 right-0">
              <ul className="font-primary text-lg p-4 px-7 w-full text-secondary">
                {langData.map((item) => (
                  <li
                    onMouseEnter={() => setHovering(true)}
                    onMouseLeave={() => setHovering(false)}
                    onClick={() => i18n.changeLanguage(item.code)}
                    className={cn(
                      `flex items-center gap-1 cursor-pointer hover:text-primary`,
                      {
                        "!text-white": hovering && i18n.language === item.code,
                        "text-primary pointer-events-none":
                          i18n.language === item.code,
                      }
                    )}
                    key={item.code}
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
          className={`w-[16rem] h-[23rem] clipped bg-bl absolute z-20 top-24 transition-height ease-in-out duration-300 right-0 ${navDesktopActive ? "max-h-[22rem]" : "max-h-0"
            }`}
        >
          <div
            className="absolute bg-black/10 backdrop-blur-md rounded-2xl w-[98%] h-[65%] left-0 top-0 right-0 bottom-0 clipped"
            ref={ref}
          >
            <div className="overflow-x-hidden max-h-[100%] w-full top-0 right-0">
              <ul className="font-secondary font-semibold uppercase p-4 px-7 w-full text-sm text-secondary">
                {navDesktop.map((items, i) => {
                  return items.type === "external" ? (
                    <a
                      href={items.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full h-full hover:text-primary"
                      key={i}
                    >
                      {/* <motion.li
                        initial={{ x: 100, opacity: 0 }}
                        animate={navDesktopActive ? { x: 0, opacity: 1 } : {}}
                        transition={{
                          duration: 0.7,
                          delay: 0.5 * (i * 0.1),
                          ease: [0.16, 0.77, 0.47, 0.97],
                        }}
                        className={`border-b-[1px] border-white/10 py-5 `}
                      >
                        {items.name}
                      </motion.li> */}
                    </a>
                  ) : items.type === "internal" ? (
                    <>
                      <button
                        onClick={() => navigate(`/${items.slug}`)}
                        className="w-full h-full hover:text-primary text-left uppercase"
                        key={i}
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
                    </>

                  )
                    // : items.slug === "audit" ? (
                    //   <motion.li
                    //     initial={{ x: 100, opacity: 0 }}
                    //     animate={navDesktopActive ? { x: 0, opacity: 1 } : {}}
                    //     transition={{
                    //       duration: 0.7,
                    //       delay: 0.5 * (i * 0.1),
                    //       ease: [0.16, 0.77, 0.47, 0.97],
                    //     }}
                    //     className={`border-b-[1px] border-white/10 py-5 group`}
                    //     onClick={handleAudit}
                    //     key={i}
                    //   >
                    //     <div className="w-full flex justify-between items-center cursor-pointer  hover:text-primary">
                    //       <p className="">{items.name}</p>
                    //       <MdKeyboardArrowUp
                    //         className={`text-2xl transition-all ease-in-out duration-300  ${audit ? "rotate-0" : "rotate-180"
                    //           }`}
                    //       />
                    //     </div>
                    //     <div
                    //       className={`text-footergry  flex flex-col gap-y-2  overflow-hidden transition-all ease-in-out duration-300 ${audit ? "max-h-[5rem] mt-4" : "max-h-0 mt-0"
                    //         } `}
                    //     >
                    //       {items.sub?.map((items, i) => {
                    //         return (
                    //           <a
                    //             href={items.link}
                    //             target="_blank"
                    //             rel="noreferrer noopener"
                    //             className="  hover:text-primary"
                    //             key={i}
                    //           >
                    //             {items.title}
                    //           </a>
                    //         );
                    //       })}
                    //     </div>
                    //   </motion.li>
                    // ) 
                    : null;
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
