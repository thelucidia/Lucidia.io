import { AnimatePresence } from 'framer-motion';
import { MetaMaskProvider } from '@metamask/sdk-react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Battlefury from './pages/AllGames/Battlefury';
import CanyonDrift from './pages/AllGames/CanyonDrift';
import CanyonDriftPage from './pages/CanyonDriftPage';
import Career from './pages/Career';
import Cryptocraft from './pages/Cryptocraft';
import CurseOfThe from './pages/CurseOfThe';
import DesertWarior from './pages/DesertWarior';
import Games from './pages/Games';
import HowToBuy from './pages/HowToBuy';
import Login from './pages/Login';
import Lucidcraft from './pages/AllGames/Lucidcraft';
import MainPage from './pages/MainPage';
import OurProduct from './pages/OurProduct';
import Privacy from './pages/Privacy';
import Roadmap from './pages/Roadmap';
import Team from './pages/Team';
import Terms from './pages/Terms';
import Zombie from './pages/AllGames/Zombie';

import './styles/custom.css';
import Logout from './pages/Logout';

const App = () => {
  const sdkOptions = {
    logging: { developerMode: false },
    checkInstallationImmediately: false,
    dappMetadata: {
      name: 'lucidia',
      url: window.location.href, // using the host constant defined above
    },
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
          <Route path="/games">
            <Route index element={<Games />} key="gamespage" />
            <Route path="zombie-outbreak" element={<Zombie />} key="zombiepage" />
            <Route path="lucidcraft" element={<Lucidcraft />} key="lucidpage" />
            <Route path="battlefury" element={<Battlefury />} key="bfpage" />
            <Route path="canyon-drift" element={<CanyonDrift />} key="canyonpage" />
          </Route>
          <Route path="/privacy" element={<Privacy />} key="privacypage" />
          <Route path="/terms" element={<Terms />} key="termspage " />
          <Route path="/roadmap" element={<Roadmap />} key="roadmappage " />
          <Route path="/ar-login" element={<Login lang="ar" />} key="ar-login" />
          <Route path="/login" element={<Login />} key="login" />
          <Route path="/ar-logout" element={<Logout lang="ar" />} key="logout" />
          <Route path="/logout" element={<Logout />} key="logout" />
          <Route path="*" element={<Navigate to="/" />} key="any" />
        </Routes>
      </MetaMaskProvider>
    </AnimatePresence>
  );
};

export default App;
