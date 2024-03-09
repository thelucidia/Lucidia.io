const IntroCard = () => {
  return (
    <div
      className="max-w-[368px] rounded-[10px] px-[34px] pt-[44px] shadow-inner border-[2px] border-transparent backdrop-blur-[48px] w-full hover:border-solid hover:border-purple-600"
      style={{
        background: 'rgba(255, 255, 255, 0.05)',
        boxShadow: '0px 0px 68px 0px rgba(138, 54, 248, 0.05) inset, 0px 4px 4px 0px rgba(138, 54, 248, 0.15) inset',
        backdropFilter: 'blur(24px)',
      }}
    >
      <img src="/TrendingGames/item_1.png" className="" />
      <div className="text-center font-second mt-[20px] text-zinc-100 text-3xl font-bold font-['Turret Road']">
        Desert Warriors Tournaments
      </div>
      <div className="md:mt-[19px] flex flex-row justify-center gap-[10px]">
        <div className="mt-4 flex gap-[10px]">
          <img src="/TrendingGames/ep_calendar.svg" />
          <span className="items-center text-neutral-500 text-xs font-medium font-['Turret Road'] font-second">
            00/08/24
          </span>
        </div>
        <div className="mt-4 flex gap-[10px]">
          <img src="/TrendingGames/people-team.svg" />
          <span className="items-center text-neutral-500 text-xs font-medium font-['Turret Road'] font-second">
            00/00
          </span>
        </div>
      </div>
      <div className="flex flex-row border-[2px] rounded-[50px] px-[48px] py-[16px] mt-[33px] mb-[38px] justify-center gap-[10px] border-solid border-purple-600">
        <img src="/TrendingGames/token.png" className="w-[16px] h-[16px] m-auto"></img>
        <span className="text-center font-second">1000 Lucid Tokens</span>
      </div>
    </div>
  );
};

export default IntroCard;
