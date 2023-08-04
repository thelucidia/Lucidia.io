

const Partners = () => {

    const partners = [
        'unreal',
        'play',
        'g2',
        'rebel',
        'elephant',
        'uni',
        'hit',
        'pancake',
        'epic',
        'arc'
    ]

    return (
        <section className="bg-bg-w-full h-auto py-10 sm:px-5 overflow-hidden">
            <div className="max-w-[1400px] w-full h-auto mx-auto">

                <div className="w-[17rem] h-auto clipped3 bg-prpl relative z-10 items-center justify-center scale-x-[-1] text-white mt-2 sm:flex hidden">
                    <div className="w-full h-full scale-x-[-1]">

                        <h1 className="font-semibold font-primary mt-3 ml-6 text-[22px]">OUR PARTNERS</h1>

                    </div>
                </div>

                <div className="w-full h-auto sm:clipped2 bg-prpl relative flex items-center justify-center scale-x-[-1]">

                    <div className="w-full h-full scale-x-[-1]">
                        <h1 className="font-semibold font-primary ml-6 text-[22px] text-center sm:hidden block text-white mt-7">OUR PARTNERS</h1>


                        <div className="flex flex-wrap sm:gap-x-[8rem] gap-x-16 gap-y-[2.5rem] items-center justify-center px-5 py-9">
                            {partners.map((items, i) => {
                                return (
                                    // <img src={`/partners/${items}.webp`} alt="Partners" className={`sm:w-auto w-20 ${items === 'epic' ? 'scale-[0.7] sm:scale-[1]' : toScale.includes(items) ? 'scale-[1.5] sm:scale-[1]' : ''}`} key={i} />

                                    <img src={`/partners/${items}.webp`} alt="Partners" className={`sm:w-[10rem] w-32`} key={i} />
                                )
                            })}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Partners;