const PartnersUpper = () => {

    const partners = [

        'bloomberg', 'yahoo', 'benzinga', 'globe', 'digital', 'block', 'market'
    ]

    return (
        <section className="w-full h-auto p-5 relative bg-bg pb-10 border-t-[1px] border-white/10 2xl:border-t-0">
            <img src="/hero/navline.webp" alt="Navline" className="absolute left-0 right-0 bottom-0 w-full 2xl:block hidden" />

            <div className="w-full max-w-[1400px] mx-auto flex flex-wrap items-center gap-x-9 md:gap-x-14 gap-y-7 justify-center h-auto">
                {partners.map((items, i) => {
                    return (
                        <img src={`/partners2/${items}.webp`} key={i} alt={items} className="md:w-auto w-20" />
                    )
                })}
            </div>
        </section>
    );
}

export default PartnersUpper;