import { motion } from 'framer-motion';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import Banner1 from '../views/Banner1';
import GameIntro from '../views/GameIntro';
import FeaturedProducts from '../views/FeaturedProducts';
import LatestNews from '../views/LatestNews';
// import Free2Play from "../views/Free2Play";
import Hero from '../views/Hero';
import Join from '../views/Join';
import Partners from '../views/Partners';
// import PartnersUpper from "../views/PartnersUpper";

const MainPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
      className="w-full h-auto bg-bg"
    >
      <Nav />
      <Hero />
      <Banner1 />
      <GameIntro />
      <FeaturedProducts />
      <LatestNews />
      {/* <Free2Play /> */}
      {/* <PartnersUpper /> */}
      <Partners />
      <Join />
      <Footer />
    </motion.div>
  );
};

export default MainPage;
