import { useTranslation } from 'react-i18next';

const Mission = () => {
  const { t } = useTranslation('');

  return (
    <section className="w-full h-auto bg-[#1E1E1E] relative py-20 px-8 font-primary text-secondary">
      <div className="max-w-[78.5%] w-full mx-auto grid lg:grid-cols-3 sm:grid-cols-1 gap-y-[92px]">
        <div className="flex">
          <div className="font-bold text-[52px] text-right ">
            <div className="">{t('mission')}</div>
            <div className="">{t('statement')}</div>
          </div>
        </div>
        <div className="col-span-2 border-l-2 xl:pl-[120px] lg:pl-[90px] md:pl-[70px] sm:pl-[50px] pl-[30px]  text-[24px]">
          {t('mission_statement')}
        </div>
        <div className="flex">
          <div className="font-bold  text-[52px] text-right ">
            <div className="">{t('vision')}</div>
            <div className="">{t('future')}</div>
          </div>
        </div>
        <div className="col-span-2 border-l-2 xl:pl-[120px] lg:pl-[90px] md:pl-[70px] sm:pl-[50px] pl-[30px] text-[24px]">
          {t('vision_content')}
        </div>
      </div>
    </section>
  );
};

export default Mission;
