import { motion } from 'framer-motion';
import Footer from '../components/Footer';
import GamesContent from '../views/Games/GamesContent';
import GamesTitle from '../views/Games/GamesTitle';
import HeroGame from '../views/Games/HeroGame';
import Meta from '../views/Meta';
import { useTranslation } from 'react-i18next';

const Games = () => {
  const { t } = useTranslation();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
      className="bg-bg h-auto"
    >
      <Meta title={t('meta.games.title')} description={t('meta.games.desc')} />
      <HeroGame />
      <GamesTitle />
      <GamesContent />
      <Footer />
    </motion.div>
  );
};

export default Games;
