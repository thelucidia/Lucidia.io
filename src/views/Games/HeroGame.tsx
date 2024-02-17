import Button2 from '../../components/Button2';
import Nav from '../../components/Nav';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';

const active_style = 'transform rotate-45 scale-150 bg-primary';
const active = true;

const HeroGame = () => {
  const { t } = useTranslation();
  return (
    <section className="w-full min-h-[40vh] md:min-h-[60vh] lg:min-h-screen px-8 sm:px-auto p-5 relative text-secondary flex flex-col bg-bg px-[154px]">
      <Nav />
      <div
        className="w-full h-full object-cover absolute top-0 left-0 object-top"
        style={{
          background:
            'linear-gradient(90deg, rgba(13, 13, 13, 0.80) 35.14%, rgba(13, 13, 13, 0.00) 65%), url(/zombie.png)',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      ></div>
      <div className="w-[85%] h-auto m-auto relative flex mt-[10em] md:mt-[12em] flex-col-reverse md:flex-col">
        <h2 className="text-[20px] font-bold mb-12">{t('games.featured_games')}</h2>
        <div
          className="w-[500px] h-[228px]"
          style={{
            background: 'url(./games/curse-title.png)',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>
        <a
          href="https://t.me/Lucidia_io"
          target="_blank"
          rel="noopener noreferrer"
          className="md:block mt-14 hidden w-[154px]"
        >
          <Button2 removeOnMobile>{t('games.see_details')}</Button2>
        </a>
        <div className="mt-16 flex flex-row justify-end">
          <ul className="mt-[115px] w-[100px] flex flex-row gap-x-4 h-[17px]">
            <li className={clsx('w-2 h-2 ', active ? active_style : 'bg-secondary')}></li>
            <li className="w-2 h-2 bg-secondary"></li>
            <li className="w-2 h-2 bg-secondary"></li>
            <li className="w-2 h-2 bg-secondary"></li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HeroGame;
