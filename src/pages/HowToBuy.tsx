import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaCirclePlay } from 'react-icons/fa6';
import { PiWarningOctagonFill } from 'react-icons/pi';
import Button from '../components/Button';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import Button2 from '../components/Button2';
import Meta from '../views/Meta';

interface stepInterface {
  title: string;
  value: string[];
}

const HowToBuy = () => {
  const { t } = useTranslation();

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
      className="w-full bg-bg min-h-screen font-primary"
    >
      <Meta title={t('meta.default.title')} description={t('meta.default.desc')} />
      <div className="w-full min-h-[20vh] md:min-h-[38vh] border-red-500 h-full relative px-5 py-8 font-primary flex items-end mx-auto left-0 right-0 justify-center text-secondary">
        <Nav />

        <img src={'/hero/background.webp'} className="w-full h-full object-cover object-top absolute top-0 left-0" />

        <div className="w-full h-full absolute top-0 left-0 bg-black/20 z-10"></div>

        <h1 className="font-bold md:text-5xl text-2xl text-secondary absolute z-10 w-fit h-fit text-center mx-auto md:mb-5">
          {t('how_to_buy')}
        </h1>
      </div>

      <div className="flex max-w-[1100px] w-full gap-11 lg:min-h-fit min-h-screen mx-auto mt-3 md:mt-6 text-secondary md:pb-20 px-5 lg:flex-row flex-col items-center lg:items-start">
        <div className="sm:w-fit w-full">
          <div className="md:w-[32rem] sm:w-[25rem] w-full h-[17rem] bg-black2 grid place-content-center">
            <FaCirclePlay className="text-6xl opacity-50" />
          </div>

          <div className="flex gap-x-3 max-w-[28rem] mx-auto justify-around mt-7 md:flex-row flex-col gap-y-4">
            <a href="https://finance.lucidia.io/" target="_blank" rel="noopener noreferrer" className="">
              <Button className="w-full md:w-44" stretchOnMobile>
                {t('buy_lucid')}
              </Button>
            </a>

            <a
              href="https://drive.google.com/file/d/1pT08KRpvPwnQcxwyGktETCeH8HtZi08v/view"
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              <Button2 className="w-full md:w-44" stretchOnMobile>
                {t('token_allocation')}
              </Button2>
            </a>
          </div>
        </div>
        <div className="w-full lg:max-h-96 lg:overflow-y-scroll ">
          <div className="">
            <h1 className="text-primary font-bold sm:text-5xl text-4xl">{t('buy.step')} #1</h1>
            <div className="mt-5 space-y-4 text-lg sm:text-xl font-medium">
              <p className="">
                {t('buy.go')}{' '}
                <a href="https://finance.lucidia.io/" target="_blank" rel="noopener noreferrer">
                  https://finance.lucidia.io/
                </a>
              </p>
              <div className="flex items-start gap-1 text-xs sm:text-base">
                <PiWarningOctagonFill className="text-2xl mt-1" />
                <p className="">{t('buy.recommend')}</p>
              </div>
              <p className="">
                {t('buy.click')}
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg"
                  alt="metamask"
                  className="inline w-6"
                />
                <span className="text-primary">Metamask</span> {t('buy.installed')}{' '}
                <span className="text-primary">Trust Wallet</span>
              </p>
              <p className="">
                {t('buy.click_the')} <span className="text-primary capitalize">{t('buy_lucid').toLowerCase()}</span>{' '}
                {t('buy.button')}
              </p>
            </div>
          </div>
          <div className="text-lg sm:text-xl space-y-6">
            <h1 className="text-primary font-bold  sm:text-5xl text-4xl mt-7">{t('buy.step')} #2</h1>
            {(t('buy.step2', { returnObjects: true }) as stepInterface[]).map(({ title, value }) => (
              <div className="" key={title}>
                <h2 className="font-bold">{title}</h2>
                {value.map((items, i) => (
                  <div className="flex gap-1 font-medium" key={i}>
                    <p className="">{i + 1}.</p>
                    <p className="">{items}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div className="text-lg sm:text-xl space-y-1">
            <h1 className="text-primary font-bold  sm:text-5xl text-4xl mt-7 mb-6">{t('buy.step')} #3</h1>

            {(t('buy.step3', { returnObjects: true }) as string[]).map((items, i) => (
              <div className="flex gap-1 font-medium" key={i}>
                <p className="">{i + 1}.</p>
                <p className="">{items}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </motion.section>
  );
};

export default HowToBuy;
