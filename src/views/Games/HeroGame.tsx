import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Button2 from '../../components/Button2';
import Nav from '../../components/Nav';
import { useTranslation } from 'react-i18next';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './style.css';

const slider_images = [
  {
    image: 'games.jpg',
    title: 'curse-title01.png',
    path: '/games/zombie-outbreak',
  },
  {
    image: 'crypto_bg01.jpg',
    title: 'cryptocraft.svg',
    path: '/games/lucidcraft',
  },
  {
    image: 'desert_bg01.jpg',
    title: 'desert.svg',
    path: '/games/battlefury',
  },
  {
    image: 'sandstorm_01.jpg',
    title: 'stormracer_01.svg',
    path: '/games/canyon-drift',
  },
];

const HeroGame = () => {
  const { t } = useTranslation();
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s: any, time: number, progress: number) => {
    (progressCircle as any).current.style.setProperty('--progress', String(1 - progress));
    (progressContent as any).current.textContent = `${Math.ceil(time / 1000)}s${s}`;
  };

  return (
    <section
      id="slider"
      className="slider w-full min-h-[900px] md:min-h-[60vh] lg:min-h-screen px-8 sm:px-auto p-5 relative text-secondary flex flex-col bg-bg px-[154px]"
    >
      <Nav />
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper "
      >
        {slider_images.map((item, index) => {
          return (
            <SwiperSlide key={`swiper-item-${index}`}>
              <img
                style={{
                  background: `linear-gradient(90deg, rgba(13, 13, 13, 0.80) 35.14%, rgba(13, 13, 13, 0.00) 65%)`,
                }}
                className="max-h-[100vh] w-full absolute h-full object-cover top-0 left-0"
                src={`images/backgrounds/${item.image}`}
              />
              <div
                className="absolute inset-0 bg-gradient-to-b from-transparent to-black"
                style={{
                  background: `linear-gradient(90deg, rgba(13, 13, 13, 0.80) 35.14%, rgba(13, 13, 13, 0.00) 65%)`,
                }}
              ></div>
              <div className="w-[85%] h-auto m-auto relative flex mt-[8em] md:mt-[8em] flex-col-reverse gap-y-8 md:flex-col">
                <h2 className="text-[28px] font-bold mb-12 text-left">{t('games.featured_games')}</h2>
                <img className="max-w-[600px] max-h-[262px]" src={`images/adverts/${item.title}`} />
                <a
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="md:block mt-14 hidden w-[154px]"
                >
                  <Button2 removeOnMobile>{t('games.see_details')}</Button2>
                </a>
              </div>
            </SwiperSlide>
          );
        })}

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </section>
  );
};

export default HeroGame;
