import { useTranslation } from 'react-i18next';
import Button from '../../components/Button';

const GamesContent = () => {
  const { t } = useTranslation();

  return (
    <section className="w-full mt-20 text-[#F0F0F0]">
      <div className="max-w-[1440px] w-full mx-auto">
        <div
          className="relative h-[384px]"
          style={{ background: '#1E1E1E url("/games/car_bg.png") no-repeat left top' }}
        >
          <img src="/games/car.png" width={261} height={165} className="absolute left-[113px] top-[142px]" />
          <div className="w-[732px] ml-[470px] pt-[72px] flex flex-col">
            <h3 className="font-bold text-5xl leading-[58px]">{t('games_page.section1_title')}</h3>
            <span className="font-medium text-xl leading-6 mt-8">{t('games_page.section1_description')}</span>
          </div>
        </div>
        <div
          className="h-[644px] flex flex-row justify-center align-middle items-center"
          style={{ backgroundImage: 'url("/games/benefit_bg.png")' }}
        >
          <div className="flex flex-col text-right pt-4 pb-12 pr-16 border-r-2 border-[#F0F0F0] mr-24">
            <h3 className="font-bold text-5xl leading-[58px]">{t('games_page.section2_title1')}</h3>
            <h3 className="font-bold text-5xl leading-[58px]">{t('games_page.section2_title2')}</h3>
            <h3 className="font-bold text-5xl leading-[58px]">{t('games_page.section2_title3')}</h3>
          </div>
          <ol className="font-medium text-xl leading-6 flex flex-col gap-y-12">
            {(t('games_page.section2_description', { returnObjects: true }) as string[]).map(
              (item: string, i: number) => (
                <li key={i} className="w-[600px]">
                  {item}
                </li>
              ),
            )}
          </ol>
        </div>
        <div className="flex flex-row justify-center align-middle items-center">
          <div className="flex flex-col gap-y-5">
            <div className="font-bold text-5xl mb-[72px] mt-[101px]">{t('games_page.join_us')}</div>
            <div className="flex flex-col gap-y-5 border-r-2 pr-24 border-[#F0F0F0] mr-[104px]">
              <div className="w-[496px] h-[52px]">
                <input
                  className="bg-transparent border-2 border-[#F0F0F0] w-full p-2 text-xl"
                  type="text"
                  placeholder={t('games_page.studio_name')}
                />
              </div>
              <div className="w-[496px] flex flex-row gap-x-5 h-[52px]">
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
              <div className="w-[496px]">
                <textarea
                  className="h-[258px] mb-[60px] resize-none bg-transparent border-2 border-[#F0F0F0] w-full p-2 text-xl"
                  placeholder={t('games_page.game_description')}
                />
              </div>
              <Button className="w-full md:w-56" stretchOnMobile>
                {t('games.play_game')}
              </Button>
            </div>
          </div>
          <div className="w-[436px] flex flex-col">
            <h3 className="font-bold text-[40px] leading-[58px] mb-5 text-[#B28539]">{t('games_page.how_join')}</h3>
            <span className="font-normal text-2xl leading-8 mt-8">{t('games_page.join_description')}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GamesContent;
