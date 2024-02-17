import { motion } from 'framer-motion';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import { IoIosArrowRoundDown } from 'react-icons/io';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Button2 from '../components/Button2';

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
      <Nav />
      <section className="w-full min-h-screen px-8 sm:px-auto p-5 relative text-secondary flex items-start justify-center">
        <img className="w-full h-full object-cover absolute top-0 left-0" src="/our-product/background.jpg" />
        <div className="md:max-w-[50%] w-full h-auto m-auto relative z-10 flex mt-[12rem] md:mt-[15rem] flex-col-reverse md:flex-row">
          <div className="w-full">
            <h2
              className="font-primary text-3xl md:text-5xl 2xl:text-[52px] 2xl:leading-[3.6rem] font-semibold md:block text-center"
              dangerouslySetInnerHTML={{ __html: t('our_product.title') }}
            ></h2>
            <div className="font-primary md:text-2xl mt-12 text-center font-medium tracking-wide">
              <p>{t('our_product.description')}</p>
            </div>
            <div className="mt-[4rem] flex justify-center items-center bottom-0	text-white	">
              <div className="relative">
                {t('our_product.scroll')}{' '}
                <motion.span
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 10, opacity: 1 }}
                  transition={{
                    duration: 1,
                    ease: 'easeIn',
                    times: [0, 0.2, 0.5, 0.8, 1],
                    repeat: Infinity,
                  }}
                  className="absolute"
                >
                  <IoIosArrowRoundDown />
                </motion.span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full h-auto pt-10 sm:pt-12 lg:pt-16 lg:pb-16 bg-bg relative flex items-center font-primary text-secondary px-5">
        <div className="md:w-[75%] w-fit mx-auto flex flex-col">
          <h3 className="font-bold text-3xl sm:text-2xl md:text-3xl">{t('our_product.our-product')}</h3>
          <div className="pt-8 grid md:grid-cols-4 grid-cols-1 gap-x-12 2 gap-y-8 justify-items-stretch">
            {(
              (t('our_product.products', {
                returnObjects: true,
              }) as detail[]) ?? []
            ).map(({ image, title, desc }, i) => (
              <Link key={`product-${i}`} to="/" className="flex flex-col gap-y-4 bg-[#1e1e1e85]">
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
                    height: 48,
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
                    height: 44,
                  }}
                >
                  {desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="w-full h-[22.7%] px-8 sm:px-auto p-5 relative text-secondary flex items-start justify-center">
        <img className="w-full h-full object-cover absolute top-0 left-0" src="/our-product/ecosystem.png" />
        <div className="md:max-w-[50%] w-full h-auto m-auto relative z-10 flex mt-[2rem] md:mt-[3rem] flex-col-reverse md:flex-row">
          <div className="w-full">
            <div className="flex flex-row justify-center gap-x-4">
              <h1 className="font-primary text-3xl md:text-5xl 2xl:text-[48px] max-w-[32rem] 2xl:leading-[3.6rem] font-semibold md:block hidden">
                {t('our_product.join')}
              </h1>
            </div>
            <div className="font-primary md:text-3xl mt-12 text-center tracking-wide">
              <p dangerouslySetInnerHTML={{ __html: t('our_product.join-content') }}></p>
            </div>
            <a
              href="https://t.me/Lucidia_io"
              target="_blank"
              rel="noopener noreferrer"
              className="md:block mt-10 hidden"
            >
              <Button2 removeOnMobile>{t('our_product.get-started')}</Button2>
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </motion.div>
  );
};

export default OurProduct;
