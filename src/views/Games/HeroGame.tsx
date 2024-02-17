import Nav from '../../components/Nav';
import { useTranslation } from 'react-i18next';
const HeroGame = () => {
  const { t } = useTranslation();
  return (
    <section className="w-full min-h-[40vh] md:min-h-[60vh] lg:min-h-screen px-8 sm:px-auto p-5 font-primary relative text-secondary flex  justify-center bg-bg">
      <Nav />
      <img src={'/zombie.png'} className="w-full h-full object-cover absolute top-0 left-0 object-top" />
      <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-b from-transparent via-transparent to-black/70 z-10"></div>

      <div className="max-w-[1300px] absolute w-full h-auto mx-auto bottom-0 z-10 mt-[4.5rem] sm:mt-[7rem] md:mt-[10rem]">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[96px] text-center absolute bottom-0 sm:bottom-12 font-bold left-0 right-0 mx-auto">
          {t('zombie')}
        </h1>
      </div>
    </section>
  );
};

export default HeroGame;
