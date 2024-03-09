import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  interface INavItem {
    name: string;
    slug: string;
    paths?: Array<string>;
    type: string;
    link?: string;
  }
  const navList: Array<INavItem> = [
    {
      name: t('nav.home'),
      slug: '',
      paths: ['/'],
      type: 'internal',
    },
    {
      name: t('nav.team'),
      slug: 'team',
      paths: ['/team'],
      type: 'internal',
    },
    {
      name: t('nav.games'),
      slug: 'games',
      paths: ['/games', '/games/zombie-outbreak', '/games/lucidcraft', '/games/battlefury', '/games/canyon-drift'],
      type: 'internal',
    },
    {
      name: t('nav.our-product'),
      slug: 'our-product',
      paths: ['/our-product'],
      type: 'internal',
    },
    {
      name: t('nav.roadmap'),
      slug: 'roadmap',
      paths: ['/roadmap'],
      type: 'internal',
    },
    {
      name: t('nav.career'),
      slug: 'career',
      paths: ['/career'],
      type: 'internal',
    },
  ];
  return (
    <div className="w-full h-fit overflow-x-auto">
      <ul className="flex gap-x-[10px] text-secondary justify-between">
        {navList.map((items, i) => {
          return (
            <li
              key={`nav-${i}`}
              onClick={() => {
                navigate(`/${items.slug}`);
              }}
              className="flex font-second text-center py-[30px] px-[60px] rounded-[50px] border-2 border-solid border-[#E5E5E5] font-semibold text-[24px] capitalize items-center cursor-pointer hover:border-[#8A36F8] hover:text-[#8A36F8]"
            >
              {items.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Navbar;
