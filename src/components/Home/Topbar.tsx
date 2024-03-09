const Topbar = () => {
  return (
    <div className="w-full h-fit pt-[40px] relative">
      {/* <div className="fixed container mx-auto w-full top-0 xl:top-7 z-20 left-0 right-0">
      </div> */}
      <div className="flex flex-row m-auto container w-full max-h-[80px] justify-between">
        <div className="rounded-[50px] lg:bg-[#1A1A1A] flex flex-row  gap-x-[58px] pl-2 py-1 pr-[39px]">
          <img src="homepage/menu.svg" alt="menu" width="70" height="70" />
          <h3 className="text-[24px] font-normal tracking-tighter font-second text-secondary m-auto lg:block hidden">
            Menu
          </h3>
        </div>
        <div className="flex flex-row gap-x-[25px]">
          <img src="homepage/logo.png" alt="logo" width="78" />
          <img src="homepage/logo.svg" alt="logo" className="sm:block hidden" />
        </div>
        <div className="rounded-[50px] lg:bg-[#1A1A1A] flex flex-row  gap-x-[58px] pr-2 py-1 pl-[39px] ">
          <h3 className="text-[24px] font-normal tracking-tighter font-second text-secondary m-auto lg:block hidden">
            Login
          </h3>
          <img src="homepage/login.svg" alt="login" width="70" />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
