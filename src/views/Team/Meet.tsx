import { useTranslation } from 'react-i18next';
import { FaLinkedin } from 'react-icons/fa';
import { cn } from '../../utils';

interface membersInterface {
  name: string;
  position: string;
  link: string;
  desc: string[];
}
const Meet = () => {
  const { t } = useTranslation('');

  return (
    <section className="w-full min-h-screen bg-bg relative p-5 font-primary text-secondary">
      <div className="max-w-[1300px] w-full mx-auto sm:mt-36 mt-4">
        <div className="sm:space-y-6 space-y-4 text-center">
          <img src="/lucidians.png" alt="Lucidians" className="mx-auto sm:w-auto w-24" />
          <h1 className="font-bold text-2xl sm:text-5xl">{t('team.meet')}</h1>
          <p className="sm:text-2xl text-base">{t('team.meet_desc')}</p>
        </div>

        <div className="flex flex-wrap gap-8 sm:mt-20 mt-10 justify-center items-center text-black font-primary">
          {(t('members', { returnObjects: true }) as membersInterface[]).map((items, i) => (
            <a
              className="max-w-[23rem] w-full h-[35rem] md:h-[25rem] sm:h-[29rem] bg-black2 relative overflow-hidden group hover:border-2 border-primary/0 hover:border-primary transition-all ease-in-out duration-300"
              key={items.name}
              href={items.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={`/team/${i}.webp`}
                alt={items.name}
                className="absolute top-0 left-0 w-full h-[82%] object-cover"
              />
              <div className="w-full h-fit md:translate-y-[60%] translate-y-0 absolute bottom-0 left-0 bg-primary p-5 group-hover:translate-y-0 transition-all ease-in-out duration-300">
                <h1 className="font-bold text-3xl">{items.name}</h1>
                <h2 className={cn('font-medium text-2xl capitalize', { 'text-xl': items.name === 'Sander Kloet' })}>
                  {items.position.toLowerCase()}
                </h2>
                <ul className="mt-3 group-hover:opacity-100 sm:opacity-0 transition-opacity ease-in-out duration-300">
                  {items.desc.map((desc, i) => (
                    <li className="font-medium text-base flex gap-x-2" key={i}>
                      <span>•</span> {desc}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center gap-1 text-xl group mt-7 mx-auto hover:text-white transition-all ease-in-out duration-100 w-fit cursor-pointer group/learn">
                  <h1 className="group-hover/learn:underline">{t('profile')}</h1>
                  <FaLinkedin />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Meet;
