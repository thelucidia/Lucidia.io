import Button2 from '../../components/Button2';
import Nav from '../../components/Nav';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const active_style = 'transform rotate-45 scale-150 bg-primary';
const active = true;

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
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   fade: true,
  //   waitForAnimate: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   appendDots: (dots) => (
  //     <div
  //       style={{
  //         backgroundColor: '#ddd',
  //         borderRadius: '10px',
  //         padding: '10px',
  //         zIndex: '100',
  //       }}
  //     >
  //       <ul style={{ margin: '0px' }}> {dots} </ul>
  //     </div>
  //   ),
  //   customPaging: (i) => (
  //     <div
  //       style={{
  //         width: '30px',
  //         color: 'blue',
  //         border: '1px blue solid',
  //       }}
  //     >
  //       {i + 1}
  //     </div>
  //   ),
  // };
  const handleSlider = (index: number, evt: { preventDefault: () => void; stopPropagation: () => void }) => {
    evt.preventDefault();
    evt.stopPropagation();
    // if (slider != index) {
    //   setSlider(index);
    // }
    setSlider(index);
    console.log('index', index, 'slider', slider);
  };

  useEffect(() => {
    // const interval = setInterval(() => {
    //   setSlider((slider) => (slider + 1) % 4);
    // }, 2500);
    // return () => clearInterval(interval);
  }, []);
  return (
    <section className="w-full min-h-[40vh] md:min-h-[60vh] lg:min-h-screen px-8 sm:px-auto p-5 relative text-secondary flex flex-col bg-bg px-[154px]">
      <Nav />
      {/* <Slider className="w-full h-full object-cover absolute top-0 left-0 z-0" {...settings}>
        <div>
          <img src={`images/backgrounds/${slider_images[0].image}`}></img>
        </div>
        <div>
          <img src={`images/backgrounds/${slider_images[1].image}`}></img>
        </div>
        <div>
          <img src={`images/backgrounds/${slider_images[2].image}`}></img>
        </div>
      </Slider> */}
      <div>
        <div
          className="w-full h-full object-cover absolute top-0 left-0 object-top"
          style={{
            background: `linear-gradient(90deg, rgba(13, 13, 13, 0.80) 35.14%, rgba(13, 13, 13, 0.00) 65%), url(images/backgrounds/${slider_images[slider].image})`,
            backgroundSize: '100%',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>
      </div>
      <div className="w-[85%] h-auto m-auto relative flex mt-[8em] md:mt-[8em] flex-col-reverse md:flex-col">
        <h2 className="text-[20px] font-bold mb-12">{t('games.featured_games')}</h2>

        <div
          className="w-[500px] h-min-[228px]"
          style={{
            background: `url(images/adverts/${slider_images[1].title})`,
            backgroundSize: '100%',
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
            <a href="/" onClick={(evt) => handleSlider(0, evt)} target="_blank" rel="noopener noreferrer">
              <li className={clsx('w-2 h-2 ', active ? active_style : 'bg-secondary')}></li>
            </a>

            <a href="/" onClick={(evt) => handleSlider(1, evt)} target="_blank" rel="noopener noreferrer">
              <li className="w-2 h-2 bg-secondary"></li>
            </a>
            <a href="/" onClick={(evt) => handleSlider(2, evt)} target="_blank" rel="noopener noreferrer">
              <li className="w-2 h-2 bg-secondary"></li>
            </a>
            <a href="/" onClick={(evt) => handleSlider(3, evt)} target="_blank" rel="noopener noreferrer">
              <li className="w-2 h-2 bg-secondary"></li>
            </a>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HeroGame;
