import Nav from '../../components/Nav';
import { useTranslation } from 'react-i18next';
// import { details } from '../../utils/types';
// import { motion } from 'framer-motion';
// import { IoIosArrowRoundDown } from 'react-icons/io';
import Banner from '../Banner';

const HeroTeam = () => {
  const { t } = useTranslation('');
  // update by freelance

  return (
    <>
      <Nav />
      <Banner bg_path="/free/team_background.png" title={t('team_title')} content={t('')} />
      <div className="relative"></div>
      <section className="w-full px-8 sm:px-auto p-5 font-primary relative text-secondary flex  justify-center bg-bg">
        <div className="md:max-w-[75%] w-full h-auto mx-auto relative px-5 z-10 my-10">
          <div className="flex lg:flex-row flex-col justify-center lg:justify-between items-center gap-10">
            <div className="py-6 px-5 bg-[url('/free/quotation.png')] bg-[length:80px_73px] bg-no-repeat">
              <div className="text-xl md:text-4xl">{t('boss_desc1')}</div>
              <div className="text-xl md:text-4xl">{t('boss_desc2')}</div>
              <div className="mt-4 text-3xl font-bold">{t('boss_name')}</div>
              <div className="mt-2 text-xl text-primary">{t('boss_position')}</div>
            </div>
            <img src="/members/profile_1.png" width={300} />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroTeam;
