import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import Button from '../components/Button';
import SubtleButton from '../components/SubtleButton';
import { cn } from '../utils';

const Free2Play = () => {
  const { t } = useTranslation();
  const settings = {
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToScroll: 1,
    variableWidth: true,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          variableWidth: false,
          centerMode: false,
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          variableWidth: false,
          centerMode: false,
        },
      },
    ],
  };

  const [page, setPage] = useState(1);

  const navigate = useNavigate();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const sliderRef = useRef<Slider>(null);

  useEffect(() => {
    // Update windowWidth when the window is resized
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Attach the event listener
    window.addEventListener('resize', handleResize);

    // Remove the event listener when the component is unmounted
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const gamesData = [
    {
      title: t('canyon'),
      image: '/free/race.webp',
      link: '/canyon-drift',
    },
    {
      title: t('zombie'),
      image: '/games/zombie/1.webp',
      link: '/zombie-outbreak',
    },
    {
      title: t('lucid'),
      image: '/games/lucidcraft/banner.jpg',
      link: '/lucidcraft',
    },
    {
      title: t('battle'),
      image: '/games/battlefury/banner.jpg',
      link: '/battlefury',
    },
  ];

  return (
    <section className="w-full h-auto bg-bg relative px-5 font-primary text-secondary overflow-hidden">
      <div className="mx-auto max-w-screen-2xl w-full sm:mt-28 mt-10">
        <h1 className="font-bold text-2xl sm:text-4xl md:text-5xl text-center">{t('free2play')}</h1>

        <div
          className="max-w-screen-2xl mx-auto relative !overflow-hidden !h-fit mt-6 sm:mt-12"
          style={{ height: 400 }}
        >
          <Slider {...settings} initialSlide={1} afterChange={setPage} ref={sliderRef} className="">
            {gamesData.map((items, i) => (
              <div
                className="relative scale-[0.97] group/main cursor-pointer"
                style={{ width: 700 }}
                key={i}
                onClick={() => {
                  if (i > page) {
                    if (page === 0 && i === 3) {
                      sliderRef?.current?.slickPrev();
                    } else {
                      sliderRef?.current?.slickNext();
                    }
                  } else if (i < page) {
                    if (page === 3 && i === 0) {
                      sliderRef?.current?.slickNext();
                    } else {
                      sliderRef?.current?.slickPrev();
                    }
                  }
                }}
              >
                {/* Game title and button */}
                <div
                  className={cn(
                    'transition-all ease-in-out duration-400 absolute w-fit flex-col mx-auto left-0 right-0 bottom-8 translate-y-0 sm:translate-y-[77%] duration-500 group-hover/main:translate-y-0 z-20 items-center sm:gap-5 sm:group-hover/main:gap-2 flex',
                  )}
                >
                  <h1 className="font-bold text-2xl sm:text-5xl">{items.title}</h1>
                  <Button
                    className="sm:block hidden"
                    onClick={() => {
                      navigate(`/games${items.link}`);
                    }}
                  >
                    {t('details')}
                  </Button>
                  <button
                    className="relative group/button sm:hidden block"
                    onClick={() => {
                      navigate(`/games${items.link}`);
                    }}
                  >
                    {t('details')}
                    {/* <div className="w-full h-[1px] absolute bottom-0 left-0 bg-primary group-hover/button:translate-x-0 -translate-x-full transition-all ease-in-out duration-500 opacity-0 group-hover/button:opacity-100"></div> */}
                  </button>
                </div>

                <div style={windowWidth < 640 ? { height: 200 } : { height: 400 }} className="relative">
                  <div className="absolute top-0 left-0 z-10 w-full h-full bg-gradient-to-b from-transparent to-black/70"></div>
                  <img
                    src={items.image}
                    alt={items.title}
                    className="absolute top-0 left-0 w-full h-full object-cover object-left"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <SubtleButton
          className="mx-auto block mt-5 w-full md:w-44"
          stretchOnMobile
          onClick={() => {
            navigate('/games');
          }}
        >
          {t('more_games')}
        </SubtleButton>
      </div>
    </section>
  );
};

export default Free2Play;
