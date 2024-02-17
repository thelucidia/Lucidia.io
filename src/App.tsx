import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import Team from './pages/Team';
import Games from './pages/Games';
import Zombie from './pages/AllGames/Zombie';
import Lucidcraft from './pages/AllGames/Lucidcraft';
import Battlefury from './pages/AllGames/Battlefury';
import CanyonDrift from './pages/AllGames/CanyonDrift';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Roadmap from './pages/Roadmap';
import { AnimatePresence } from 'framer-motion';
import HowToBuy from './pages/HowToBuy';
import OurProduct from './pages/OurProduct';
import Career from './pages/Career';
import './styles/custom.css';

const App = () => {
  return (
    <AnimatePresence mode="wait">
      <Routes>
        <Route path="/" element={<MainPage />} key="main" />
        <Route path="/team" element={<Team />} key="teampage" />
        <Route path="/how" element={<HowToBuy />} key="teampage" />
        <Route path="/our-product" element={<OurProduct />} key="our-product" />
        <Route path="/career" element={<Career />} key="career" />
        <Route path="games">
          <Route index element={<Games />} key="gamespage" />
          <Route path="zombie-outbreak" element={<Zombie />} key="zombiepage" />
          <Route path="lucidcraft" element={<Lucidcraft />} key="lucidpage" />
          <Route path="battlefury" element={<Battlefury />} key="bfpage" />
          <Route path="canyon-drift" element={<CanyonDrift />} key="canyonpage" />
        </Route>
        <Route path="privacy" element={<Privacy />} key="privacypage" />
        <Route path="terms" element={<Terms />} key="termspage " />
        <Route path="roadmap" element={<Roadmap />} key="roadmappage " />
      </Routes>
    </AnimatePresence>
  );
};

export default App;
