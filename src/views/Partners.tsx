import { useTranslation } from 'react-i18next';
import parse from 'html-react-parser';

const Partners = () => {
  const { t } = useTranslation();
  const partners = [
    'unreal.webp',
    'play.webp',
    'sphereone.png',
    'rebel.webp',
    'epic.webp',
    'arc.webp',
    'goshen.png',
    'seman.png',
  ];

  return (
    <section className="bg-bg-w-full h-auto pt-10 sm:px-5 overflow-hidden font-primary text-secondary sm:pt-28">
      <div className="max-w-[1300px] w-full h-auto mx-auto">
        <div className="w-full h-auto sm:clipped2 bg-prpl relative flex items-center justify-center scale-x-[-1]">
          <div className="w-full h-full scale-x-[-1]">
            <div
              className="absolute w-[544px] h-[291px] top-[85px] left-12"
              style={{ backgroundColor: 'rgba(179, 133, 57, 0.08)', filter: 'blur(75px)' }}
            />
            <div
              className="absolute w-[515px] h-[301px] top-[8px] left-[572px]"
              style={{ backgroundColor: 'rgba(179, 133, 57, 0.08)', filter: 'blur(60px)' }}
            />
            <div className="flex flex-row">
              <img src="/partners/lucidia.jpg" alt="partner" />
              <div className="flex flex-col gap-y-6">
                <h1 className="relative sm:text-5xl text-2xl font-bold text-center">{parse(t('partners'))}</h1>
                <div className="flex flex-wrap sm:gap-x-[8rem] gap-x-4  gap-y-[2.5rem] items-center justify-center py-9">
                  {partners.map((items, i) => {
                    return <img src={`/partners/${items}`} alt="Partners" className={`sm:w-[10rem] w-24`} key={i} />;
                  })}
                </div>
                <p className="text-[18px] px-12 m-auto text-center">{t('partners_desc')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
