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
      <div className="max-w-[1100px] w-full mx-auto flex flex-col gap-y-[10px]">
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
        <div className="flex flex-row gap-x-[20px] mt-6">
          {games_info[filter].map((e, i) => {
            return (
              <div
                className="relative w-[270px] h-[299px]"
                style={{ background: 'rgba(30, 30, 30, 0.52)' }}
                onClick={() => {
                  navigate(`${e.path}`);
                }}
                key={`game-info-${i}`}
              >
                <img src={`/games/${e.image}`} width={270} height={222} />
                <span className="font-bold text-2xl leading-[76px] pl-5">{e.title}</span>
                <div
                  className="absolute w-[100px] h-6 left-5 top-[186px]"
                  style={{ background: 'rgba(30, 30, 30, 0.92)' }}
                >
                  <img className="relative inline left-2 top-0" src="/games/desktop.png" width={16} height={16} />
                  <span className="font-medium text-base leading-6 ml-[20px]">{t('games_page.desktop')}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GamesTitle;
