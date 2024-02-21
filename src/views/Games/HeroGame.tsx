import Button2 from '../../components/Button2';
import Nav from '../../components/Nav';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const active_style = 'transform rotate-45 scale-150 bg-primary';

const slider_images = [
  {
    image: 'games.jpg',
    title: 'curse-title01.png',
  },
  {
    image: 'crypto_bg01.jpg',
    title: 'cryptocraft.svg',
  },
  {
    image: 'desert_bg01.jpg',
    title: 'desert.svg',
  },
  {
    image: 'sandstorm_01.jpg',
    title: 'stormracer_01.svg',
  },
];

const HeroGame = () => {
  const { t } = useTranslation();
  const [slider, setSlider] = useState(0);
  const handleSlider = (index: number, evt: { preventDefault: () => void; stopPropagation: () => void }) => {
    evt.preventDefault();
    evt.stopPropagation();
    if (slider != index) {
      setSlider(index);
    }
    setSlider(index);
    console.log('index', index, 'slider', slider);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setSlider((slider) => (slider + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return (
    <section className="w-full min-h-[40vh] md:min-h-[60vh] lg:min-h-screen px-8 sm:px-auto p-5 relative text-secondary flex flex-col bg-bg px-[154px]">
      <Nav />
      <img
        style={{
          background: `linear-gradient(90deg, rgba(13, 13, 13, 0.80) 35.14%, rgba(13, 13, 13, 0.00) 65%)`,
        }}
        className="max-h-[100vh] w-full absolute h-full object-cover top-0 left-0 opacity-0 opacity-100 transition-opacity duration-500 ease-in-out "
        src={`images/backgrounds/${slider_images[slider].image}`}
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-transparent to-black"
        style={{
          background: `linear-gradient(90deg, rgba(13, 13, 13, 0.80) 35.14%, rgba(13, 13, 13, 0.00) 65%)`,
        }}
      ></div>
      <div className="w-[85%] h-auto m-auto relative flex mt-[8em] md:mt-[8em] flex-col-reverse gap-y-8 md:flex-col">
        <h2 className="text-[28px] font-bold mb-12">{t('games.featured_games')}</h2>
        <img className="max-w-[600px] min-h-[262px]" src={`images/adverts/${slider_images[slider].title}`} />
        <a
          href="https://t.me/Lucidia_io"
          target="_blank"
          rel="noopener noreferrer"
          className="md:block mt-14 hidden w-[154px]"
        >
          <Button2 removeOnMobile>{t('games.see_details')}</Button2>
        </a>
        <div className="flex flex-row justify-end">
          <ul className="mt-[115px] w-[100px] flex flex-row gap-x-4 h-[17px]">
            <a href="/" onClick={(evt) => handleSlider(0, evt)} target="_blank" rel="noopener noreferrer">
              <li className={clsx('w-2 h-2 ', slider === 0 ? active_style : 'bg-secondary')}></li>
            </a>

            <a href="/" onClick={(evt) => handleSlider(1, evt)} target="_blank" rel="noopener noreferrer">
              <li className={clsx('w-2 h-2 ', slider === 1 ? active_style : 'bg-secondary')}></li>
            </a>
            <a href="/" onClick={(evt) => handleSlider(2, evt)} target="_blank" rel="noopener noreferrer">
              <li className={clsx('w-2 h-2 ', slider === 2 ? active_style : 'bg-secondary')}></li>
            </a>
            <a href="/" onClick={(evt) => handleSlider(3, evt)} target="_blank" rel="noopener noreferrer">
              <li className={clsx('w-2 h-2 ', slider === 3 ? active_style : 'bg-secondary')}></li>
            </a>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HeroGame;
