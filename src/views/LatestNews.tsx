// import { FaPlayCircle } from "react-icons/fa";
import { useTranslation } from 'react-i18next';

const LatestNews = () => {
  const { t } = useTranslation();
  return (
    <section className="w-full h-auto mt-10 pt-10 sm:pt-20 lg:pt-12 lg:pb-16 relative flex items-center font-primary text-secondary px-5">
      <div className="md:w-[75%] mx-auto flex flex-col">
        <h1 className="font-bold text-2xl sm:text-2xl md:text-3xl">{t('latest_news')}</h1>
        <div className="mt-8 w-full grid grid-cols-1 xl:grid-cols-2 gap-8">
          <div>
            <img src="/free/news1.png" className="w-full" />
            <div className="mt-4">
              <div className="text-sm text-[#F0F0F0]">{t('posted_date1')}</div>
              <div className="mt-4 text-2xl font-bold">{t('news_title1')}</div>
              <div className="mt-6 text-xl">{t('news_title1')}</div>
            </div>
          </div>

          <div className="xl:grid-cols-3 gap-8">
            <div className="w-full md:flex gap-4 items-start">
              <img src="/free/news2.png" className="lg:w-auto w-full" />
              <div className="lg:col-span-2">
                <div className="text-sm text-[#F0F0F0]">{t('posted_date1')}</div>
                <div className="cursor-pointer mt-4 text-xl font-bold hover:text-primary">{t('news_title1')}</div>
              </div>
            </div>
            <div className="w-full mt-4 md:flex gap-4 items-start">
              <img src="/free/news3.png" className="lg:w-auto w-full" />
              <div className="lg:col-span-2">
                <div className="text-sm text-[#F0F0F0]">{t('posted_date1')}</div>
                <div className="mt-4 cursor-pointer text-xl hover:text-primary font-bold">{t('news_title1')}</div>
              </div>
            </div>
            <div className="w-full mt-4 md:flex gap-4 items-start">
              <img src="/free/news4.png" className="lg:w-auto w-full" />
              <div className="lg:col-span-2">
                <div className="text-sm text-[#F0F0F0]">{t('posted_date1')}</div>
                <div className="mt-4 cursor-pointer hover:text-primary text-xl font-bold">{t('news_title1')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
