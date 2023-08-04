const PartnersLower = () => {

    const partners = [

        'bloomberg', 'yahoo', 'benzinga', 'globe', 'digital', 'block', 'market'
    ]

    return (
        <section className="w-full h-auto p-5 bg-cyan relative">

            <div className="w-full max-w-[1400px] mx-auto flex flex-wrap items-center gap-x-9 md:gap-x-14 gap-y-7 justify-center h-auto">
                {partners.map((items, i) => {
                    return (
                        <img src={`/partners2/${items}.webp`} key={i} alt={items} className="md:w-auto w-20 invert" />
                    )
                })}
            </div>
        </section>
    );
}

export default PartnersLower;