import { useTranslation } from 'react-i18next';

const Ourpartner = () => {
  const { t } = useTranslation();
  const partners = [
    'esports.webp',
    'rzm.webp',
    'seman.png',
    'sdcons.webp',
    'sphereone.png',
    'epic.webp',
    'rebel.webp',
    'unreal.webp',
    'play.webp',
    'arc.webp',
    'goshen.png',
  ];

  return (
    <section className="bg-bg-w-full h-auto pt-10 sm:px-5 overflow-hidden font-primary text-secondary sm:pt-28">
      <div className="max-w-[900px] w-full h-auto mx-auto">
        <div className="w-full h-auto sm:clipped2 bg-prpl relative flex items-center justify-center scale-x-[-1]">
          <div className="w-full h-full scale-x-[-1]">
            <div className="flex flex-wrap justify-center">
              <div className="flex-1 flex flex-col gap-y-6">
                <div
                  className="max-w-[462px] rounded-[50px] mx-auto px-[22px] py-[16px]"
                  style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    boxShadow:
                      '0px 0px 68px 0px rgba(138, 54, 248, 0.05) inset, 0px 4px 4px 0px rgba(138, 54, 248, 0.15) inset',
                    backdropFilter: 'blur(24px)',
                  }}
                >
                  <h1 className="text-[20px] text-center font-third">OUR PARTNERS</h1>
                </div>
                <div className="min-w-[350px] px-4 flex flex-wrap pt-[36px] md:gap-x-8 sm:gap-x-4 gap-x-2  gap-y-[2.5rem] items-center justify-center">
                  {partners.map((items, i) => {
                    return <img src={`/partners/${items}`} alt="Partners" className={`sm:w-[10rem] w-24`} key={i} />;
                  })}
                </div>
                <p className="text-[16px] px-12 m-auto font-second text-center mb-[300px]">{t('partners_desc')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ourpartner;
