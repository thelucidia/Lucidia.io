import { motion } from 'framer-motion';
import Meta from '../views/Meta';
import { useTranslation } from 'react-i18next';
import Topbar from '../components/Home/Topbar';
import Navbar from '../components/Home/Navbar';
import Ourpartner from '../components/Home/OurPartner';
import GameIntro from '../components/Home/GameIntro';
import Featured from '../components/Home/Featured';

const HomePage = () => {
  const { t } = useTranslation();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
      className="w-full h-auto bg-[#01010B]"
    >
      <Meta title={t('meta.home.title')} description={t('meta.home.desc')} />
      <div
        className="w-full h-auto container m-auto bg-[url('/homepage/1.png')] bg-no-repeat "
        style={{
          backgroundSize: 'contain',
          backgroundPosition: '74% 0%',
        }}
      >
        <Topbar />
        <div className="grid lg:grid-cols-2 md:grid-cols-1">
          <div>
            <h1 className="md:text-[30px] text-[15px] font-third tracking-tighter text-[#E5E5E5] leading-[57.6px] mt-[168px]">
              Web<span className="md:text-[40px] text-[20px] font-second">3 &</span> Gaming Unite: Elevate Middle East
              Gaming
            </h1>
            <div className="font-second text-[24px] bg-[#8A36F8] rounded-[50px] text-secondary text-center py-[28px] mt-[193px] max-w-[244px]">
              Start Now
            </div>
          </div>
          <div className="lg:mt-[443px] md:mt-[100px] mt-[100px] mt-[100px] mb-[73px] flex flex-row m-auto">
            <div
              className="rounded-[10px] max-w-[350px] text-secondary text-center py-[25px] px-[28px]"
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                boxShadow:
                  '0px 0px 68px 0px rgba(138, 54, 248, 0.05) inset, 0px 4px 4px 0px rgba(138, 54, 248, 0.15) inset',
                backdropFilter: 'blur(24px)',
              }}
            >
              <h3 className="text-[48px] font-semibold font-second">$420k</h3>
              <h4 className="text-[24px] font-second">In Rewards No.1 MLN</h4>
              <h3 className="text-[48px] font-semibold font-second">15</h3>
              <h4 className="text-[24px] font-second">MLN In Game Assets</h4>
              <h3 className="text-[48px] font-semibold font-second">4+</h3>
              <h4 className="text-[24px] font-second">Game Inside Metaverse</h4>
              <h3 className="text-[48px] font-semibold font-second">20</h3>
              <h4 className="text-[24px] font-second">Maps</h4>
            </div>
            <img src="/homepage/post.png" alt="post" width="350" className="ml-[-96px]" />
          </div>
        </div>
        <Navbar />
      </div>
      <div className="bg-[url('/homepage/bg.png')] bg-no-repeat">
        <GameIntro />
        <Featured />
        <Ourpartner />
      </div>
    </motion.div>
  );
};

export default HomePage;
