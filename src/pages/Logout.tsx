import { useEffect } from 'react';
import { useSDK } from '@metamask/sdk-react';
import { useTranslation } from 'react-i18next';
import AppNavbar from '../components/AppNavbar';
import Meta from '../views/Meta';

const Logout = (props: any) => {
  const { lang } = props;
  const { sdk, connected } = useSDK();
  const { t, i18n } = useTranslation();
  const terminate = async () => {
    sdk?.terminate();
    i18n.changeLanguage(lang ?? 'en');
    window.location.href = `${Boolean(lang) ? `${lang}-` : ''}login`;
  };
  useEffect(() => {
    if (connected) {
      setTimeout(terminate, 2000);
    }
  }, [connected]);
  return (
    <div className="login w-full h-full">
      <Meta title={t('meta.default.title')} description={t('meta.default.desc')} />
      <AppNavbar loggedin={connected} />
      <div className="logout">Logging out...</div>
    </div>
  );
};

export default Logout;
