// import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
// import Button3 from './Button3';
import Button4 from './Button4';
import { FaDiscord, FaRedditAlien, FaTelegramPlane, FaTiktok, FaYoutube } from 'react-icons/fa';
import { BsTwitterX } from 'react-icons/bs';
import { RiInstagramFill } from 'react-icons/ri';

const Footer = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const general = [
    {
      title: t('privacy'),
      link: 'privacy',
    },
    {
      title: t('terms'),
      link: 'terms',
    },
    {
      title: t('token_sale'),
      // link: 'https://lucidia.io/token-sale-terms-and-conditions/',
      link: '/',
    },
  ];

  const company = [
    {
      title: t('contact'),
      link: 'contact@lucidia.io',
    },
    {
      title: t('frequent'),
      link: '',
    },
    {
      title: t('anti'),
      link: '',
    },
  ];

  const icons = [
    {
      link: 'https://t.me/Lucidia_io',
      icon: <FaTelegramPlane />,
    },
    {
      link: 'https://discord.gg/lucidia',
      icon: <FaDiscord />,
    },
    {
      link: 'https://twitter.com/lucidia_io',
      icon: <BsTwitterX />,
    },
    {
      link: 'https://youtube.com/@lucidia_official',
      icon: <FaYoutube />,
    },
    {
      link: 'https://www.reddit.com/r/LucidiaMetaverse/',
      icon: <FaRedditAlien />,
    },
    {
      link: 'https://instagram.com/lucidia_official',
      icon: <RiInstagramFill />,
    },
    {
      link: 'https://www.tiktok.com/@lucidia.io',
      icon: <FaTiktok />,
    },
  ];

  return (
    <footer className="w-full h-auto min-h-auto bg-black2 relative sm:py-12 mt-20">
      <div className="max-w-[90%] mx-auto w-full text-secondary flex px-5 lg:pr-12 gap-x-24 lg:flex-row flex-col ">
        <div className="mt-7 sm:mt-0">
          <img src="/hero/logo.webp" alt="Logo" className="sm:w-auto w-28" />
          <p className="font-primary font-regular max-w-[29rem] mt-3 sm:mt-7 text-xs md:text-xl">{t('jurisdiction')}</p>
          <div className="text-footergry flex items-center gap-x-7 sm:gap-x-16 mt-8">
            <div className="flex items-center max-w-[360px] flex-wrap gap-12 pr-16">
              {icons.map((items, i) => (
                <a
                  href={items.link}
                  target="_blank"
                  rel="noreferrer"
                  className="md:text-2xl sm:text-xl text-base hover:scale-[1.1] hover:text-primary transition-all ease-in-out duration-300"
                  key={i}
                >
                  {items.icon}
                </a>
              ))}
            </div>

            {/* <div className="flex items-center gap-x-[5px]">
              <HiOutlineDevicePhoneMobile className="text-secondary text-xl" />
              <p className="font-medium font-primary">347-519-5430</p>
            </div> */}
          </div>
        </div>

        <div className="w-full font-primary flex gap-x-20 lg:flex-row flex-col justify-between gap-y-8 mt-11 lg:mt-14 ">
          <div className="flex gap-8">
            <div className="">
              <h2 className="font-semibold text-[36px]">{t('general')}</h2>
              <ul className="flex flex-col gap-y-2 sm:gap-y-3 mt-4">
                {general.map((items, i) => {
                  return (
                    <li
                      className="font-secondary cursor-pointer font-regular text-base text-[20px] relative w-fit hover:text-primary transition-colors ease-in-out duration-300"
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
              <h2 className="font-semibold text-[36px]">{t('company')}</h2>
              <ul className="flex flex-col gap-y-2 sm:gap-y-3 mt-4">
                {company.map((items, i) => {
                  return (
                    <li
                      className="font-secondary font-regular text-base text-[20px] relative w-fit hover:text-primary transition-colors ease-in-out duration-300"
                      key={i}
                    >
                      <a
                        href={items.title === 'contact us' ? 'mailto:contact@lucidia.io' : items.link}
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

          <div className="relative">
            <h2 className="text-lg">{t('subscribe')}</h2>
            <input
              className="w-full border-[1px] border-[#F0F0F0] py-1 px-2 mt-2 bg-transparent"
              placeholder={t('full_name')}
            ></input>
            <input
              className="w-full border-[1px] border-[#F0F0F0] py-1 px-2 mt-2 bg-transparent"
              placeholder={t('email')}
            ></input>
            <div className="flex gap-2">
              <input
                className="w-full border-[1px] border-[#F0F0F0] py-1 px-2 mt-2 bg-transparent"
                placeholder={t('discord_name')}
              ></input>
              <input
                className="w-full border-[1px] border-[#F0F0F0] py-1 px-2 mt-2 bg-transparent"
                placeholder={t('telegram_name')}
              ></input>
            </div>
            <div className="flex flex-row justify-start">
              <Button4 className="w-full md:w-60 mt-9" stretchOnMobile>
                {t('subscribe_button')}
              </Button4>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[90%] mx-auto w-full text-secondary sm:mt-20 flex justify-between items-center sm:pb-0 pb-5 px-5 pt-12 sm:pt-0 ">
        <div className="">
          <h3 className="font-secondary text-sm font-semibold flex gap-x-2">
            © Lucidia 2024 <span>|</span> {t('rights')}
          </h3>
          <p className="text-[12px] text-footergry font-secondary mt-2">{t('jurisdiction')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
