// import { FaPlayCircle } from "react-icons/fa";
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import parse from 'html-react-parser';

const LatestNews = () => {
  const { t } = useTranslation();
  const [index, setIndex] = useState(1);
  return (
    <section className="w-full h-auto mt-10 pt-10 sm:pt-20 lg:pt-12 lg:pb-16 relative flex items-center font-primary text-secondary px-5">
      <div className="md:w-[82%] mx-auto flex flex-col">
        <h1 className="font-bold text-2xl sm:text-2xl md:text-5xl">{t('latest_news')}</h1>
        <div className="mt-8 w-full grid grid-cols-1 xl:grid-cols-2 gap-8">
          <div>
            <img src={`/free/news${index}.png`} className="w-full" />
            <div className="mt-4">
              <div className="text-sm text-[#F0F0F0]">{t(`posted_date${index}`)}</div>
              <div className="mt-4 text-3xl font-bold text-ellipsis line-clamp-2">{t(`news_title${index}`)}</div>
              <div className="mt-6 text-xl">
                {parse((t(`news_content${index}`, { returnObjects: true }) as string[]).join('<br/><br/>'))}
              </div>
            </div>
          </div>

          <div className="">
            <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-4 items-start mb-14">
              <div>
                <img src="/free/news1.png" className="w-full" />
              </div>
              <div className="lg:col-span-2">
                <div className="text-sm text-[#F0F0F0]">{t('posted_date1')}</div>
                <div className="cursor-pointer mt-4 text-xl font-bold hover:text-primary" onClick={() => setIndex(1)}>
                  {t('news_title1')}
                </div>
              </div>
            </div>
            <div className="w-full mt-4 grid grid-cols-1 lg:grid-cols-3 gap-4 items-start mb-14">
              <div>
                <img src="/free/news2.png" className="w-full" />
              </div>
              <div className="lg:col-span-2">
                <div className="text-sm text-[#F0F0F0]">{t('posted_date2')}</div>
                <div className="mt-4 cursor-pointer text-xl hover:text-primary font-bold" onClick={() => setIndex(2)}>
                  {t('news_title2')}
                </div>
              </div>
            </div>
            <div className="w-full mt-4 grid grid-cols-1 lg:grid-cols-3 gap-4 items-start mb-14">
              <div>
                <img src="/free/news3.png" className="w-full" />
              </div>
              <div className="lg:col-span-2">
                <div className="text-sm text-[#F0F0F0]">{t('posted_date3')}</div>
                <div className="mt-4 cursor-pointer hover:text-primary text-xl font-bold" onClick={() => setIndex(3)}>
                  {t('news_title3')}
                </div>
              </div>
            </div>
            <div className="w-full mt-4 grid grid-cols-1 lg:grid-cols-3 gap-4 items-start">
              <div>
                <img src="/free/news4.png" className="w-full" />
              </div>
              <div className="lg:col-span-2">
                <div className="text-sm text-[#F0F0F0]">{t('posted_date4')}</div>
                <div className="mt-4 cursor-pointer hover:text-primary text-xl font-bold" onClick={() => setIndex(4)}>
                  {t('news_title4')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
