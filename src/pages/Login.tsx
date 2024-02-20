import AppNavbar from '../components/AppNavbar';
import { Link } from 'react-router-dom';
import { useSDK } from '@metamask/sdk-react';
import { useEffect, useState } from 'react';

const formatAddress = (addr: string | undefined) => {
  return `${addr?.substring(0, 8)}...`;
};

const Login = () => {
  const { sdk, connected, account } = useSDK();
  const [failed, setFailed] = useState(false);
  const [fetched, setFetched] = useState(false);
  const connectMetaMask = async (evt: { preventDefault: () => void; stopPropagation: () => void }) => {
    evt.preventDefault();
    evt.stopPropagation();
    try {
      if (connected) {
        await sdk?.terminate();
      } else {
        await window.ethereum?.request({ method: 'eth_requestAccounts' });
        await sdk?.connect();
      }
    } catch (err) {
      console.error(err);
      setFailed(true);
    }
  };
  useEffect(() => {
    setFetched(true);
  }, []);
  useEffect(() => {
    if (!fetched) {
      return;
    }
    if (connected) {
      window.location.href = '/after-login/home.html';
    }
  }, [connected]);
  return (
    <div className="login w-full h-full" style={{}}>
      <AppNavbar loggedin={connected} />
      <div className="relative px-4 pt-[16rem]">
        <div className="login-pane m-auto">
          <h1>enter lucidia</h1>
          <h3>Login width</h3>
          <a href="/" className="button metamask" onClick={connectMetaMask}>
            MetaMask {connected && formatAddress(account)}
          </a>
          <a href="/" className="button wallet-connect" onClick={(evt) => evt.preventDefault()}>
            WalletConnect
          </a>
          {failed && (
            <div className="connect-failed">
              <div className="icon"></div>
              <h4>Failed to connect. You can try again.</h4>
            </div>
          )}
        </div>
      </div>

      <ul className="social-links">
        <li>
          <Link to="#">
            <img src="assets/image/socials/telegram.svg" alt="telegram" />
          </Link>
        </li>
        <li>
          <Link to="#">
            <img src="assets/image/socials/discord.svg" alt="discord" />
          </Link>
        </li>
        <li>
          <Link to="#">
            <img src="assets/image/socials/twitter.svg" alt="twitter" />
          </Link>
        </li>
        <li>
          <Link to="#">
            <img src="assets/image/socials/website.svg" alt="website" />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Login;
