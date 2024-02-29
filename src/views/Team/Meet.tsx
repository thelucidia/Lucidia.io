import { useTranslation } from 'react-i18next';
import { FaLinkedinIn } from 'react-icons/fa';

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

        <div className="grid lg:grid-cols-2 gap-[20px] text-white mt-5">
          {(t('members', { returnObjects: true }) as membersInterface[]).map((items, i) => (
            <div
              className="bg-[#1e1e1e] grid md:grid-cols-4 sm:grid-cols-1 rounded-bl-2xl min-h-[160px]"
              key={items.name}
            >
              <div>
                <div
                  className={`border-primary border-2 rounded-bl-2xl rounded-tr-2xl md:w-full sm:w-[150px] w-[150px] h-full overflow-hidden`}
                >
                  <img
                    src={`/members/profile_${i + 1}.png`}
                    className="md:w-full md:h-full sm:w-[150px] sm:h-[150px]"
                  />
                </div>
              </div>
              {/* <div className="p-[20px_15px] relative"> */}
              <div className="px-[10px] py-[15px] relative sm:mt-4 mt-4">
                <h2 className="text-xl font-bold leading-5 mb-2">{items.name}</h2>
                <h3 className="text-xl text-primary font-bold uppercase leading-5 sm:mb-8 mb-8">{items.position}</h3>
                <a
                  href={items.link}
                  target="_blank"
                  rel="noreferrer"
                  className="w-[20px] h-[20px] rounded-full bg-white text-black text-xs flex flex-col aligns-center justify-center items-center absolute bottom-4"
                >
                  <FaLinkedinIn />
                </a>
              </div>
              <div className="md:col-span-2 sm:col-span-1 p-[20px_15px]">
                <ul className="list-disc text-sm border-l-2 border-l-white pl-10 h-full">
                  {items.desc.map((desc, i) => (
                    <li className="leading-5" key={i}>
                      {desc}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Meet;
