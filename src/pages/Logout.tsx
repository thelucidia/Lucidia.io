import { useSDK } from '@metamask/sdk-react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AppNavbar from '../components/AppNavbar';
import Meta from '../views/Meta';
import { useTranslation } from 'react-i18next';

const Logout = () => {
  const { sdk, connected } = useSDK();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const terminate = async () => {
    sdk?.terminate();
    navigate('/login');
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
