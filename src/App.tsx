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
import { AnimatePresence } from 'framer-motion';
import HowToBuy from './pages/HowToBuy';
import CurseOfThe from './pages/CurseOfThe';
import Cryptocraft from './pages/Cryptocraft';
import CanyonDriftPage from './pages/CanyonDriftPage';
import DesertWarior from './pages/DesertWarior';
import Roadmap from './pages/Roadmap';
import OurProduct from './pages/OurProduct';
import Career from './pages/Career';
import Login from './pages/Login';
import { MetaMaskProvider } from '@metamask/sdk-react';

import './styles/custom.css';
import Logout from './pages/Logout';
import { useEffect } from 'react';

const App = () => {
  const sdkOptions = {
    logging: { developerMode: false },
    checkInstallationImmediately: false,
    dappMetadata: {
      name: 'lucidia',
      url: window.location.href, // using the host constant defined above
    },
  };

  const Home = () => {
    useEffect(() => {
      window.location.href = 'home.html';
    }, []);
    return null;
  };

  return (
    <AnimatePresence mode="wait">
      <MetaMaskProvider debug={false} sdkOptions={sdkOptions}>
        <Routes>
          <Route path="/" element={<MainPage />} key="main" />
          <Route path="/team" element={<Team />} key="teampage" />
          <Route path="/how" element={<HowToBuy />} key="teampage" />
          <Route path="/CurseOfThe" element={<CurseOfThe />} key="teampage" />
          <Route path="/Cryptocraft" element={<Cryptocraft />} key="teampage" />
          <Route path="/CanyonDriftPage" element={<CanyonDriftPage />} key="teampage" />
          <Route path="/DesertWarior" element={<DesertWarior />} key="teampage" />

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
          <Route path="login" element={<Login />} key="login" />
          <Route path="logout" element={<Logout />} key="logout" />
          <Route path="*" element={<Home />} key="any" />
        </Routes>
      </MetaMaskProvider>
    </AnimatePresence>
  );
};

export default App;
