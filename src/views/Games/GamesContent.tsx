import { useTranslation } from 'react-i18next';
import Button3 from '../../components/Button3';
import { useState } from 'react';

const GamesContent = () => {
  const { t } = useTranslation();
  const [subscribed, setSubscribed] = useState(false);
  const handleSubscribed = (clicked: boolean) => {
    if (clicked === true) {
      console.log(clicked);
      setSubscribed(clicked);
    }
  };
  return (
    <section className="w-full mt-20 text-[#F0F0F0] pb-32">
      <div className="w-full mx-auto">
        <div
          className="relative h-[384px]"
          style={{ background: '#1E1E1E url("/games/car_bg.png") no-repeat left top' }}
        >
          <img src="games/vector.svg" className="absolute right-0" />
          <img src="games/vector.svg" className="absolute right-[100px]" />
          <img src="/games/car.png" width={261} height={165} className="absolute left-[113px] top-[142px]" />
          <div className="w-[732px] ml-[470px] pt-[72px] flex flex-col">
            <h3 className="font-bold text-5xl leading-[58px]">{t('games_page.section1_title')}</h3>
            <span className="font-medium text-xl leading-6 mt-8">{t('games_page.section1_description')}</span>
          </div>
        </div>
        <div
          className="h-[644px] flex flex-row justify-center align-middle items-center"
          style={{ backgroundImage: 'url("/games/benefit_bg.png")', backgroundSize: 'cover' }}
        >
          <div className="container mx-auto grid grid-cols-12 justify-center gap-24">
            <div className="col-span-5 flex flex-col justify-center">
              <div className="border-r-2 border-[#F0F0F0] flex flex-col text-right py-10 pr-20">
                <h3 className="font-bold text-5xl leading-[58px]">{t('games_page.section2_title1')}</h3>
                <h3 className="font-bold text-5xl leading-[58px]">{t('games_page.section2_title2')}</h3>
                <h3 className="font-bold text-5xl leading-[58px]">{t('games_page.section2_title3')}</h3>
              </div>
            </div>
            <ol className="col-span-7 font-medium text-xl leading-6 flex flex-col gap-y-12">
              {(t('games_page.section2_description', { returnObjects: true }) as string[]).map(
                (item: string, i: number) => (
                  <li key={i} className="relative leading-6 ml-6">
                    <img src={`games/number${i + 1}.svg`} className="absolute top-[-35px] left-[-35px]" />
                    {item}
                  </li>
                ),
              )}
            </ol>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-2">
          <div className="flex flex-col gap-y-5">
            <div className="font-bold text-5xl mb-[72px] mt-[101px]">{t('games_page.join_us')}</div>
            <div className="flex flex-col gap-y-5 border-r-2 pr-24 border-[#F0F0F0] mr-[104px]">
              <div className="w-full h-[52px]">
                <input
                  className="bg-transparent border-2 border-[#F0F0F0] w-full p-2 text-xl"
                  type="text"
                  placeholder={t('games_page.studio_name')}
                />
              </div>
              <div className="w-full flex flex-row gap-x-5 h-[52px]">
                <input
                  className="flex-auto w-4 bg-transparent border-2 border-[#F0F0F0] p-2 text-xl"
                  type="text"
                  placeholder={t('games_page.email')}
                />
                <input
                  className="flex-auto w-4 bg-transparent border-2 border-[#F0F0F0] p-2 text-xl"
                  type="text"
                  placeholder={t('games_page.website')}
                />
              </div>
              <div className="w-full">
                <textarea
                  className="h-[258px] mb-[60px] resize-none bg-transparent border-2 border-[#F0F0F0] w-full p-2 text-xl"
                  placeholder={t('games_page.game_description')}
                />
              </div>
              <Button3 className="w-full md:w-56" onClicked={handleSubscribed} stretchOnMobile>
                {t('games_page.submit')}
              </Button3>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            {!subscribed ? (
              <>
                <h3 className="font-bold text-[40px] leading-[58px] mb-5 text-primary">
                  {t('games_page.before_join')}
                </h3>
                <span className="font-normal text-2xl leading-8 mt-8">{t('games_page.before_join_description')}</span>
              </>
            ) : (
              <>
                <h3 className="font-bold text-[40px] leading-[58px] mb-5 text-primary">{t('games_page.after_join')}</h3>
                <span className="font-normal text-2xl leading-8 mt-8">{t('games_page.after_join_description')}</span>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GamesContent;
