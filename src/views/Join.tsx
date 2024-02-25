import { BsTwitterX } from 'react-icons/bs';
import { FaDiscord, FaRedditAlien, FaTelegramPlane, FaTiktok, FaYoutube } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';
import { useTranslation } from 'react-i18next';

const Join = () => {
  const { t } = useTranslation();
  const icons = [
    {
      link: 'https://t.me/Lucidia_io',
      icon: <FaTelegramPlane size={32} />,
    },
    {
      link: 'https://discord.gg/lucidia',
      icon: <FaDiscord size={32} />,
    },
    {
      link: 'https://twitter.com/lucidia_io',
      icon: <BsTwitterX size={32} />,
    },
    {
      link: 'https://youtube.com/@lucidia_official',
      icon: <FaYoutube size={32} />,
    },
    {
      link: 'https://www.reddit.com/r/LucidiaMetaverse/',
      icon: <FaRedditAlien size={32} />,
    },
    {
      link: 'https://instagram.com/lucidia_official',
      icon: <RiInstagramFill size={32} />,
    },
    {
      link: 'https://www.tiktok.com/@lucidia.io',
      icon: <FaTiktok size={32} />,
    },
  ];

  return (
    <section className="w-full md:h-[16rem] h-[5rem] sm:h-[10rem] bg-black2 relative mt-9 sm:mt-20 mb-32 flex justify-between">
      {/* <img src="/joinleft.webp" alt="JoinLeft" className="" /> */}

      <div className="w-full h-full pl-[12.5%] flex justify-center flex-col gap-y-5 md:gap-y-24">
        <h1 className=" text-sm sm:text-2xl md:text-3xl lg:text-[48px] font-bold text-secondary">
          {/* {t("join_community")} */}
          {t('join1')} <span className="transition-all ease-in-out duration-400 text-primary">{t('join2')}</span>{' '}
          {t('join3')}
        </h1>

        <div className="flex justify-start items-center lg:gap-12 gap-4 sm:gap-7 text-secondary">
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
      </div>
      <img src="/hero/soldiers.png" alt="JoinRight" className="" />
    </section>
  );
};

export default Join;
