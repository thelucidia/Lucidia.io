import { useTranslation } from 'react-i18next';

// interface MissionInterface {
//   bold: string;
//   normal: string;
// }

const Mission = () => {
  const { t } = useTranslation('');

  return (
    <section className="w-full h-auto bg-[#1E1E1E] relative py-20 px-8 font-primary text-secondary">
      <div className="max-w-[78.5%] w-full mx-auto flex flex-col gap-y-[92px]">
        <div className="justify-between md:flex gap-x-[10rem]">
          <div className="flex-1 font-bold text-[52px] md:text-right">
            <div className="">{t('mission')}</div>
            <div className="">{t('statement')}</div>
          </div>
          <div className="flex-1 pl-[10rem] w-[720px] md:border-l-2 text-[24px]">{t('mission_statement')}</div>
        </div>
        <div className="justify-between md:flex gap-x-[10rem]">
          <div className="flex-1 font-bold text-[52px] md:text-right ">
            <div className="">{t('vision')}</div>
            <div className="">{t('future')}</div>
          </div>
          <div className="flex-1 pl-[10rem] md:border-l-2 w-[720px] text-[24px]">{t('vision_content')}</div>
        </div>
        <div className="col-span-2 border-l-2 xl:pl-[120px] lg:pl-[90px] md:pl-[70px] sm:pl-[50px] pl-[30px] text-[24px]">
          {t('vision_content')}
        </div>
      </div>
    </section>
  );
};

export default Mission;
