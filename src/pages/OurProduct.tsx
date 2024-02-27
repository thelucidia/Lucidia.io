import { motion } from 'framer-motion';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
// import Button2 from '../components/Button2';
import Banner from '../views/Banner';
import Button4 from '../components/Button4';
import Meta from '../views/Meta';

interface detail {
  image: string;
  title: string;
  desc: string;
}

const OurProduct = () => {
  const { t } = useTranslation();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
      className="bg-bg h-auto"
    >
      <Meta title={t('meta.products.title')} description={t('meta.products.desc')} />
      <Nav />
      <Banner
        bg_path="/our-product/background.jpg"
        title={t('our_product.title')}
        content={t('our_product.description')}
      />
      <section className="w-full h-auto pt-10 sm:pt-12 lg:pt-16 lg:pb-16 bg-bg relative flex items-center font-primary text-secondary px-5">
        <div className="container w-fit mx-auto flex flex-col">
          <h3 className="font-bold text-3xl sm:text-2xl md:text-3xl">{t('our_product.our-product')}</h3>
          <div className="pt-8 grid md:grid-cols-4 grid-cols-1 gap-x-10 gap-y-8">
            {(
              (t('our_product.products', {
                returnObjects: true,
              }) as detail[]) ?? []
            ).map(({ image, title, desc }, i) => (
              <div key={`product-${i}`} className="flex flex-col gap-y-3 bg-[#1e1e1e85]">
                <div
                  style={{
                    backgroundColor: '#f0f0f0',
                    backgroundImage: `url(${image})`,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center center',
                    minHeight: 168,
                  }}
                ></div>
                <h3
                  className="line-clamp-2 font-primary font-bold text-xl mx-4 flex flex-col"
                  style={{
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    display: '-webkit-box',
                    maxHeight: 52,
                  }}
                >
                  {title}
                </h3>
                <p
                  className="mx-4 mb-4 line-clamp-2 flex flex-col"
                  style={{
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    display: '-webkit-box',
                    maxHeight: 32,
                  }}
                >
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="w-full h-[22.7%] mb-4 px-8 sm:px-auto p-5 relative text-secondary flex items-start justify-center">
        <img className="w-full h-full object-cover absolute top-0 left-0" src="/our-product/ecosystem.png" />
        <div className="md:max-w-[70%] w-full h-auto m-auto relative z-10 flex mt-[2rem] md:mt-[3rem] flex-col-reverse md:flex-row">
          <div className="w-full">
            <div className="flex flex-row justify-center gap-x-4">
              <h1 className="font-primary text-[36px] font-bold md:block hidden">{t('our_product.join')}</h1>
            </div>
            <div className="font-primary mt-12 text-center tracking-wide font-[500] text-[36px]">
              <p dangerouslySetInnerHTML={{ __html: t('our_product.join-content') }}></p>
            </div>
            <a
              href="https://t.me/Lucidia_io"
              target="_blank"
              rel="noopener noreferrer"
              className="md:block mt-10 hidden"
            >
              <Button4 align={true} removeOnMobile>
                {t('our_product.get-started')}
              </Button4>
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </motion.div>
  );
};

export default OurProduct;
