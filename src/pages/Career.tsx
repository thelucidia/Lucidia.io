import { motion } from 'framer-motion';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import { IoIosArrowRoundDown } from 'react-icons/io';
import { useTranslation } from 'react-i18next';

interface role {
  role: string;
  opened: Number;
  content: string;
}

const Career = () => {
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
        <img className="w-full h-full object-cover absolute top-0 left-0" src="/career/background.jpg" />
        <div className="w-full h-auto m-auto relative z-10 flex mt-[12rem] md:mt-[20rem] flex-col-reverse md:flex-row">
          <div className="w-full">
            <h2
              dangerouslySetInnerHTML={{ __html: t('career.title') }}
              className="font-primary text-3xl md:text-5xl 2xl:text-[52px] max-w-[32rem] 2xl:leading-[3.6rem] font-semibold md:block hidden"
            ></h2>
            <div className="mt-[4rem] flex justify-center items-center bottom-0	text-white">
              <div className="relative">
                {t('career.scroll')}{' '}
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
      <section className="w-full h-auto pt-62px sm:pt-[62px] lg:pt-[124px] lg:pb-[162px] bg-bg relative flex items-center font-primary text-secondary px-5">
        <div className="md:w-[75%] w-fit mx-auto flex flex-row gap-x-[156px] justify-center">
          <h2
            className="font-bold text-6xl sm:text-3xl md:text-6xl text-right"
            dangerouslySetInnerHTML={{ __html: t('career.culture_Benefits') }}
          ></h2>
          <p className="pl-[156px] text-3xl w-[650px] border-l border-solid border-gray-300 font-normal text-gray-300">
            {t('career.culture_content')}
          </p>
        </div>
      </section>
      <section className="bg-black3 w-full h-auto pt-62px sm:pt-[36px] lg:pt-[72px] lg:pb-[112px] bg-bg relative flex items-center font-primary text-secondary px-5">
        <div className="md:w-[75%] w-fit mx-auto flex flex-col gap-y-[57px] justify-center">
          <h2
            className="font-bold text-6xl sm:text-3xl md:text-5xl text-left"
            dangerouslySetInnerHTML={{ __html: t('career.the_feeling_work_with_us') }}
          ></h2>
          <div className="flex flex-row gap-x-8 px-[33px]">
            <div className="flex flex-col gap-y-10 pt-6">
              <div className="flex flex-row gap-x-5">
                <img src="/career/avatar1.png" width={132} />
                <div className="flex flex-col gap-y-6">
                  <h4 className="text-3xl">{t('career.raphael')}</h4>
                  <p className="text-[24px] text-yellow-700">{t('career.raphael_role')}</p>
                </div>
              </div>
              <p className="text-[20px] max-w-[600px] font-medium text-gray-300">{t('career.raphael_content')}</p>
            </div>
            <div className="flex flex-col gap-y-10 pt-6">
              <div className="flex flex-row gap-x-5">
                <img src="/career/avatar2.png" width={132} />
                <div className="flex flex-col gap-y-6">
                  <h4 className="text-3xl">{t('career.meera')}</h4>
                  <p className="text-[24px] text-yellow-700">{t('career.meera_role')}</p>
                </div>
              </div>
              <p className="text-[20px] max-w-[600px] font-medium text-gray-300">{t('career.meera_content')}</p>
            </div>
          </div>
        </div>
      </section>
      <section
        className="w-full min-h-screen px-8 sm:px-auto pt-[71px] pb-[102px] relative text-secondary flex items-start justify-center "
        style={{
          background:
            'linear-gradient(0deg, rgba(13, 13, 13, 0.96) 0%, rgba(13, 13, 13, 0.96) 100%), url(/career/open_position.jpg), lightgray 50% / cover no-repeat',
        }}
      >
        <div className="md:w-[80%] w-fit mx-auto flex flex-col gap-y-[57px] justify-center">
          <h2 className="font-bold text-[52px] sm:text-3xl md:text-5xl text-left">{t('career.our_journey')}</h2>
          <h4 className="text-[24px] pt-[32px] mb-[80px] font-medium text-gray-200">{t('career.journey_content')}</h4>
          <div className="flex flex-col gap-y-8">
            {(
              (t('career.roles', {
                returnObjects: true,
              }) as role[]) ?? []
            ).map(({ role, opened, content }, i) => (
              <div className="flex flex-row gap-x-[220px]" key={`roles-${i}`}>
                <div className="flex flex-col gap-y-5">
                  <h3 className="text-gray-200 text-[30px] font-semibold min-w-[300px]">{role}</h3>
                  <p className="text-[20px] text-gray-200">{`${t('career.open_position')}: ${opened}`}</p>
                </div>
                <p className="text-[20px] text-gray-200 font-medium pl-[92px] border-l border-solid border-gray-300 line-clamp-3">
                  {content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </motion.div>
  );
};

export default Career;
