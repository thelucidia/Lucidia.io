import { motion } from 'framer-motion';
import Footer from '../components/Footer';
import GamesContent from '../views/Games/GamesContent';
import HeroGame from '../views/Games/HeroGame';
import GamesTitle from '../views/Games/GamesTitle';

const Games = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
      className="bg-bg h-auto"
    >
      <HeroGame />
      <GamesTitle />
      <GamesContent />
      <Footer />
    </motion.div>
  );
};

export default Games;
