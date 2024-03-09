const FeaturedCard = () => {
  return (
    <div
      className="max-w-[368px] rounded-[10px] px-[34px] pt-[32px] shadow-inner border-[2px] border-transparent backdrop-blur-[48px] w-full hover:border-solid hover:border-purple-600"
      style={{
        background: 'rgba(255, 255, 255, 0.05)',
        boxShadow: '0px 0px 68px 0px rgba(138, 54, 248, 0.05) inset, 0px 4px 4px 0px rgba(138, 54, 248, 0.15) inset',
        backdropFilter: 'blur(24px)',
      }}
    >
      <div className="flex flex-row justify-between gap-[10px]">
        <div className="flex flex-row">
          <img src="/Featured/avatar1.png" className="relative" />
          <img src="/Featured/avatar2.png" className="relative -left-[10px]" />
          <img src="/Featured/avatar3.png" className="relative -left-[20px]" />
        </div>
        <div className="flex flex-row">
          <span className="m-auto text-white font-TurretRoad text-base font-bold leading-24 tracking-wider">4.6</span>
          <img src="/Featured/star.svg" className="w-[28px] h-[28px]" />
        </div>
      </div>
      <div className="flex w-full">
        <img src="/Featured/item_1.png" className="m-auto" />
      </div>

      <div className="text-center mt-[20px] text-zinc-100 text-[30px] font-bold font-['Turret Road'] leading-[24px]">
        Middle Eastern Developer Hub
      </div>
      <div className="text-white text-center font-TurretRoad text-[12px] font-normal leading-[24px] tracking-wider">
        A specialized space for developers to colla…
      </div>
      <div className="flex flex-row justify-between mt-[70px] mb-[28px] gap-[10px]">
        <div className="flex flex-row m-auto ml-0 gap-[6px]">
          <span className="text-center text-zinc-100 text-[30px] font-bold font-['Turret Road'] leading-[24px]">
            $4.80
          </span>
          <span className="flex items-end text-white text-center font-TurretRoad text-[12px] font-normal tracking-wider line-through">
            $5.80
          </span>
        </div>
        <div className="flex flex-row justify-between gap-[15px] px-[17px] py-[14px] border-[2px] rounded-[50px] border-solid border-white">
          <span>Buy Now</span>
          <img src="/Featured/vector.svg" />
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
