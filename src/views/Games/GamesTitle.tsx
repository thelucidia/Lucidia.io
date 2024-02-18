import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const GamesTitle = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <section className="w-full mt-6 text-[#F0F0F0]">
      <div className="max-w-[1100px] w-full mx-auto flex flex-col gap-y-[10px]">
        <div className="font-bold text-5xl leading-[58px]">{t('games_page.all_play')}</div>
        <ul className="flex flex-row">
          {(t('games_page.category', { returnObjects: true }) as string[]).map((item: string, i: number) => (
            <li
              className={clsx(
                'w-[124px] h-12 mr-5 bg-[#1E1E1E]',
                'text-center text-xl leading-[48px] font-medium',
                i == 0 ? 'bg-[#B38539]' : 'bg-[#1E1E1E]',
              )}
            >
              {item}
            </li>
          ))}
        </ul>
        <div className="flex flex-row gap-x-[20px] mt-6">
          <div className="relative w-[270px] h-[299px]" style={{ background: 'rgba(30, 30, 30, 0.52)' }} onClick={() => {navigate('/CurseOfThe')}} >
            <img src="/games/curse_of_the_pharaoh.png" width={270} height={222} />
            <span className="font-bold text-2xl leading-[76px] pl-5">{t('games_page.title_pharaoh_curse')}</span>
            <div className="absolute w-[100px] h-6 left-5 top-[186px]" style={{ background: 'rgba(30, 30, 30, 0.92)' }}>
              <img className="relative inline left-2 top-0" src="/games/desktop.png" width={16} height={16} />
              <span className="font-medium text-base leading-6 ml-[20px]">{t('games_page.desktop')}</span>
            </div>
          </div>
          <div className="relative w-[270px] h-[299px]" style={{ background: 'rgba(30, 30, 30, 0.52)' }} onClick={() => {navigate('/Cryptocraft')}}>
            <img src="/games/cryptocraft.png" width={270} height={222} />
            <span className="font-bold text-2xl leading-[76px] pl-5">{t('games_page.title_cryptocraft')}</span>
            <div className="absolute w-[100px] h-6 left-5 top-[186px]" style={{ background: 'rgba(30, 30, 30, 0.92)' }}>
              <img className="relative inline left-2 top-0" src="/games/desktop.png" width={16} height={16} />
              <span className="font-medium text-base leading-6 ml-[20px]">{t('games_page.desktop')}</span>
            </div>
          </div>
          <div className="relative w-[270px] h-[299px]" style={{ background: 'rgba(30, 30, 30, 0.52)' }} onClick={() => {navigate('/DesertWarior')}}>
            <img src="/games/desert_warriors.png" width={270} height={222} />
            <span className="font-bold text-2xl leading-[76px] pl-5">{t('games_page.title_desert_warriors')}</span>
            <div className="absolute w-[100px] h-6 left-5 top-[186px]" style={{ background: 'rgba(30, 30, 30, 0.92)' }}>
              <img className="relative inline left-2 top-0" src="/games/desktop.png" width={16} height={16} />
              <span className="font-medium text-base leading-6 ml-[20px]">{t('games_page.desktop')}</span>
            </div>
          </div>
          <div className="relative w-[270px] h-[299px]" style={{ background: 'rgba(30, 30, 30, 0.52)' }} onClick={() => {navigate('/CanyonDriftPage')}}>
            <img src="/games/sandstorm_racers.png" width={270} height={222} />
            <span className="font-bold text-2xl leading-[76px] pl-5">{t('games_page.title_sandstore_racers')}</span>
            <div className="absolute w-[100px] h-6 left-5 top-[186px]" style={{ background: 'rgba(30, 30, 30, 0.92)' }}>
              <img className="relative inline left-2 top-0" src="/games/desktop.png" width={16} height={16} />
              <span className="font-medium text-base leading-6 ml-[20px]">{t('games_page.desktop')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GamesTitle;
