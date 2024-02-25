import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSDK } from '@metamask/sdk-react';
import { useTranslation } from 'react-i18next';
import AppNavbar from '../components/AppNavbar';
import Meta from '../views/Meta';

const Logout = (props: any) => {
  const { lang } = props;
  const { sdk, connected } = useSDK();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  useEffect(() => {
    Boolean(lang) && i18n.changeLanguage(lang);
  }, [lang]);
  const terminate = async () => {
    sdk?.terminate();
    navigate('login');
  };
  useEffect(() => {
    setTimeout(terminate, 2000);
  }, [connected]);
  return (
    <div className="login w-full h-full" style={{}}>
      <Meta title={t('meta.default.title')} description={t('meta.default.desc')} />
      <AppNavbar loggedin={connected} />
      <div className="logout">Logging out...</div>
    </div>
  );
};

export default Logout;
