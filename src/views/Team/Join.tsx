const Join = () => {
    return (
        <section className="w-full h-auto py-10 bg-bg px-7 pb-24">
            <div className="max-w-[1400px] mx-auto w-full h-auto flex items-center justify-center gap-x-14 md:mt-10">

                <img src="/team/token.webp" alt="Token" className="w-[15rem] lg:block hidden" />

                <div className="max-w-[60rem] w-full md:h-[27rem] h-auto overflow-hidden md:pb-2 clipped2 bg-gr relative flex items-center justify-center scale-x-[-1] text-white bg-gry">
                    <div className="scale-x-[-1] w-full h-full px-5 pt-6 pb-4 relative overflow-hidden">

                        <h1 className="text-[#2A2B2F] absolute -top-20 left-0 text-[180px] font-primary font-bold uppercase lg:block hidden select-none transition-opacity ease-in-out duration-[0.1s]">JOIN US</h1>

                        <div className="md:absolute bottom-0 top-0 my-auto left-5 md:left-9 md:pr-20 flex items-center justify-center flex-col">

                            <div className="h-fit">
                                <img src={`/token.webp`} alt="Token" className="mb-5 w-14 md:block hidden" />
                                <h1 className="font-primary font-[700] uppercase text-[2.2rem]">Join us today!</h1>
                                <p className="text-[#B4B6BF] font-[500] font-primary leading-[145%] md:text-[20px]">Be the first to experience the future of the internet.Meet our crypto experts to start your Lucidia adventure now!</p>
                            </div>

                            <div className="flex items-center justify-between md:justify-center mt-3 md:absolute bottom-2 left-0 right-0 w-full">
                                <a href="https://t.me/Lucidia_io" target='_blank' rel='noopener noreferrer' className="flex-shrink-0 w-[9rem]">
                                    <button className="w-full md:w-[9rem] mx-auto md:mt-20 h-14 clipped2 bg-cyan relative  font-bold flex items-center justify-center scale-x-[-1]">
                                        <div className="absolute bg-cyan w-[98%] h-[91%] left-0 top-0 right-0 bottom-0 m-auto clipped2"></div>
                                        <h1 className="font-secondary relative z-10 text-black font-[700] text-[12px] scale-x-[-1]">START NOW</h1>
                                    </button>
                                </a>

                                <img src={`/token.webp`} alt="Token" className="w-[4rem] md:hidden block" />

                            </div>

                        </div>


                    </div>

                </div>

            </div>
        </section>
    );
}

export default Join;