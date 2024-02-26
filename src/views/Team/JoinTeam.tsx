import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';

const JoinTeam = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <>
      <section className="w-full md:h-[23rem] h-[6rem] sm:h-[10rem] bg-black2 relative sm:mt-20 mt-7 mb-32 flex justify-between font-primary text-secondary">
        {/* <img src="/joinleft.webp" alt="JoinLeft" className="" /> */}

        <div className="w-full h-full pl-[12.5%] flex justify-center flex-col gap-y-3 md:gap-y-24">
          <h1 className=" text-base sm:text-2xl md:text-4xl lg:text-5xl font-bold text-secondary">{t('team.want')}</h1>

          {/* <div className="relative w-[200px] lg:w-[523px] sm:scale-1 grayscale brightness-50">
            <svg
              width="523"
              height="63"
              viewBox="0 0 523 63"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="lg:block hidden"
            >
              <path
                d="M1.54592 31.5L37.5031 1H485.497L521.454 31.5L485.497 62H37.5031L1.54592 31.5Z"
                stroke="#F0F0F0"
                fill="#B38539"
                strokeWidth="2"
              />
              <path d="M39.8656 6H483.134L513 31.5L483.134 57H39.8656L10 31.5L39.8656 6Z" fill="#B38539" />
            </svg>

            <svg
              width="200"
              height="36"
              viewBox="0 0 280 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="lg:hidden block"
            >
              <path d="M21.9125 4H258.087L274 18L258.087 32H21.9125L6 18L21.9125 4Z" fill="#B38539" />
              <path
                d="M1.48997 18L20.2671 1H259.733L278.51 18L259.733 35H20.2671L1.48997 18Z"
                stroke="#F0F0F0"
                strokeWidth="2"
              />
            </svg>

            <h1 className="absolute top-0 left-0 bottom-0 right-0 m-auto h-fit lg:text-3xl text-sm font-medium text-center">
              {t('team.apply')}
            </h1>
          </div> */}
          <div className="flex gap-x-3 md:flex-row flex-col md:text-2xl">
            <Button
              onClick={() => {
                window.location.href = 'https://forms.gle/9QFPRP9pEFxGtY5j9';
              }}
              className="w-full md:w-60"
              stretchOnMobile
            >
              {t('team.apply')}
            </Button>
          </div>
        </div>
        <img src="/games/canyondrift/cars.png" alt="JoinRight" className="" />
      </section>
    </>
  );
};

export default JoinTeam;
