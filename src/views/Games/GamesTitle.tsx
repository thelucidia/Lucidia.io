import clsx from 'clsx';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const GamesTitle = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [filter, setFilter] = useState(0);

  const handleFilter = (i: number, evt: { preventDefault: () => void; stopPropagation: () => void }) => {
    evt.preventDefault();
    evt.stopPropagation();
    setFilter(i);
  };

  const games_info = [
    [
      {
        title: 'Curse of the Pharaos',
        image: 'curse_of_the_pharaoh.png',
        path: '/CurseOfThe',
      },
      {
        title: 'Cryptocraft',
        image: 'cryptocraft.png',
        path: '/games/lucidcraft',
      },
      {
        title: 'Desert Warriors',
        image: 'desert_warriors.png',
        path: '/DesertWarior',
      },
      {
        title: 'Sandstorm Racers',
        image: 'sandstorm_racers.png',
        path: '/CanyonDriftPage',
      },
    ],
    [
      {
        title: 'Desert Warriors',
        image: 'desert_warriors.png',
        path: '/DesertWarior',
      },
      {
        title: 'Curse of the Pharaos',
        image: 'curse_of_the_pharaoh.png',
        path: '/CurseOfThe',
      },
      {
        title: 'Sandstorm Racers',
        image: 'sandstorm_racers.png',
        path: '/CanyonDriftPage',
      },
      {
        title: 'Cryptocraft',
        image: 'cryptocraft.png',
        path: '/games/lucidcraft',
      },
    ],
    [
      {
        title: 'Sandstorm Racers',
        image: 'sandstorm_racers.png',
        path: '/CanyonDriftPage',
      },
      {
        title: 'Desert Warriors',
        image: 'desert_warriors.png',
        path: '/DesertWarior',
      },
      {
        title: 'Curse of the Pharaos',
        image: 'curse_of_the_pharaoh.png',
        path: '/CurseOfThe',
      },
      {
        title: 'Cryptocraft',
        image: 'cryptocraft.png',
        path: '/games/lucidcraft',
      },
    ],
    [
      {
        title: 'Curse of the Pharaos',
        image: 'curse_of_the_pharaoh.png',
        path: '/CurseOfThe',
      },
      {
        title: 'Cryptocraft',
        image: 'cryptocraft.png',
        path: '/games/lucidcraft',
      },
    ],
    [
      {
        title: 'Desert Warriors',
        image: 'desert_warriors.png',
        path: '/DesertWarior',
      },
    ],
    [
      {
        title: 'Sandstorm Racers',
        image: 'sandstorm_racers.png',
        path: '/CanyonDriftPage',
      },
    ],
  ];

  return (
    <section className="w-full pt-8 text-[#F0F0F0]">
      <div className="container mx-auto flex flex-col gap-y-[10px]">
        <div className="font-bold text-5xl leading-[58px]">{t('games_page.all_play')}</div>
        <ul className="flex flex-row">
          {(t('games_page.category', { returnObjects: true }) as string[]).map((item: string, i: number) => (
            <a
              key={`game-link-${i}`}
              href="/"
              onClick={(evt) => handleFilter(i, evt)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <li
                className={clsx(
                  'w-[124px] h-12 mr-5 bg-[#1E1E1E]',
                  'text-center text-xl leading-[48px] font-medium',
                  i == filter ? 'bg-[#B38539]' : 'bg-[#1E1E1E]',
                )}
              >
                {item}
              </li>
            </a>
          ))}
        </ul>
        <div className="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 gap-[20px] mt-6">
          {games_info[filter].map((e, i) => {
            return (
              <div
                key={`game-info-${i}`}
                className="flex flex-col transition-all bg-[#1e1e1e]/[.52]"
                onClick={() => {
                  navigate(`${e.path}`);
                }}
                style={{
                  cursor: 'pointer',
                }}
              >
                <div className="w-full relative">
                  <img className="w-full h-auto" src={`/games/${e.image}`} />
                  <div className="absolute bottom-[12px] left-[20px] bg-[#1E1E1E]/[.92] p-[4px_8px] gap-[12px] flex flex-row items-center">
                    <img className="w-[16px] h-[16px]" src="/games/desktop.png" />
                    <span className="text-[16px]">{t('games_page.desktop')}</span>
                  </div>
                </div>
                <span className="font-bold text-2xl p-4 flex flex-auto justify-center aligns-center text-center">
                  {e.title}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GamesTitle;
