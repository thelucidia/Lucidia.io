import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSDK } from '@metamask/sdk-react';
import { useTranslation } from 'react-i18next';
import AppNavbar from '../components/AppNavbar';
import Meta from '../views/Meta';

const formatAddress = (addr: string | undefined) => {
  return `${addr?.substring(0, 8)}...`;
};

const Login = (props: any) => {
  const { sdk, connected, account } = useSDK();
  const [failed, setFailed] = useState(false);
  const [fetched, setFetched] = useState(false);
  const { t, i18n } = useTranslation();
  const { lang } = props;
  useEffect(() => {
    i18n.changeLanguage(lang ?? 'en');
  }, [lang]);
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
      window.location.href = `/${i18n.language}/after-login/home.html`;
    }
  }, [connected]);
  return (
    <div className="login w-full h-full" style={{}}>
      <Meta title={t('meta.default.title')} description={t('meta.default.desc')} />
      <AppNavbar loggedin={connected} />
      <div className="relative px-4 pt-[16rem]">
        <div className="login-pane m-auto">
          <h1 className="capitalize">{t('login.enter_lucidia')}</h1>
          <h3>{t('login.login_with')}</h3>
          <a href="/" className="button metamask" onClick={connectMetaMask}>
            {t('login.metamask')} {connected && formatAddress(account)}
          </a>
          <a href="/" className="button wallet-connect" onClick={(evt) => evt.preventDefault()}>
            {t('login.walletconnect')}
          </a>
          {failed && (
            <div className="connect-failed">
              <div className="icon"></div>
              <h4 className="capitalize">{t('login.failed')}</h4>
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
