import { motion } from 'framer-motion';
import Footer from '../components/Footer';
import GamesContent from '../views/Games/GamesContent';
import GamesTitle from '../views/Games/GamesTitle';
import HeroGame from '../views/Games/HeroGame';
import Meta from '../views/Meta';

const Games = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
      className="bg-bg h-auto"
    >
      <Meta
        title="Explore Diverse Games within Lucidia's Web3 Ecosystem"
        description="Join Lucidia and expand your game's reach across a vibrant Web3 ecosystem, featuring cross-platform compatibility and a unified gaming experience. Benefit from wider audience reach, enhanced player experiences, and innovative features for game developers."
      />
      <HeroGame />
      <GamesTitle />
      <GamesContent />
      <Footer />
    </motion.div>
  );
};

export default Games;
