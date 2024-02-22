import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import Button from '../components/Button';
import SubtleButton from '../components/SubtleButton';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
// import { cn } from "../utils";
import { motion } from 'framer-motion';
const OtherGames = ({ initialSlide }: { initialSlide?: number }) => {
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

  const [page, setPage] = useState(initialSlide ?? 1);
  const sliderRef = useRef<Slider>(null);

  const navigate = useNavigate();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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
      title: t('zombie'),
      image: '/free/zombie.webp',
      link: '/zombie-outbreak',
    },
    {
      title: t('lucid'),
      image: '/games/lucidcraft/banner.png',
      link: '/lucidcraft',
    },
    {
      title: t('battle'),
      image: '/games/battlefury/banner.png',
      link: '/battlefury',
    },
    {
      title: t('canyon'),
      image: '/free/race.webp',
      link: '/canyon-drift',
    },
  ];

  return (
    <>
      <div
        className="max-w-screen-2xl mx-auto relative !overflow-hidden !h-fit mt-6 sm:mt-12 text-secondary font-primary"
        style={{ height: 300 }}
      >
        <h1 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold py-5">{t('other')}</h1>
        <Slider {...settings} initialSlide={initialSlide ?? 1} afterChange={setPage} className="" ref={sliderRef}>
          {gamesData.map((items, i) => (
            <div
              className="scale-[0.97] relative group/main cursor-pointer "
              style={{ width: 640 }}
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
              <motion.div
                initial={{ backgroundColor: 'rgba(0,0,0,0.2)' }}
                className={
                  'transition-all  ease-in-out duration-400    absolute w-full flex-col mx-auto left-0 right-0 bottom-0  translate-y-0 sm:translate-y-[77%] duration-500 group-hover/main:translate-y-0 z-20 items-center sm:gap-5 sm:group-hover/main:gap-2 flex'
                }
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
              </motion.div>

              <div style={windowWidth < 640 ? { height: 200 } : { height: 400 }} className="relative ">
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
        <span className="inline">{t('more_games')}</span>
      </SubtleButton>
    </>
  );
};

export default OtherGames;
