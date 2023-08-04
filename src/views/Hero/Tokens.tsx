import TokenBox from "../../components/TokenBox";

const Tokens = () => {

    const data = [
        {
            title: 'play2earn',
            slug: 'play',
            desc: 'Earn $LUCID by participating in Lucidia games and achieving high scores',
            img: 'play'
        },
        {
            title: 'learn2earn',
            slug: 'learn',
            desc: 'Earn $LUCID by completing short courses offered by top universities and corporations in Lucidia',
            img: 'learn'
        },
        {
            title: 'train2earn',
            slug: 'train',
            desc: 'Earn $LUCID by contributing to the development of AI within the Lucidia Metaverse',
            img: 'train'
        },
        {
            title: 'fit2earn',
            slug: 'fit',
            desc: 'Earn $LUCID by tracking calories burned through workout and competing in the leaderboard',
            img: 'fit'
        },

    ]

    return (
        <section className="w-full h-auto px-5 py-7 md:py-10 bg-bg relative pb-10 md:pb-28">
            <div className="max-w-[1400px] mx-auto w-full h-auto">
                <h1 className="font-medium md:text-center text-transparent text-[32px] sm:text-3xl md:text-4xl font-primary  "><span className="bg-clip-text bg-gradient-to-r from-white via-[#cab8ff] to-white">Earn $LUCID?</span><span className="bg-clip-text bg-gradient-to-r from-white to-lavender"> Tokens</span></h1>

                <div className="md:mt-20 mt-5 flex flex-wrap items-center justify-center gap-5">
                    {data.map((items, i) => {
                        return (
                            <TokenBox key={i} title={items.title} slug={items.slug} desc={items.desc} img={items.img} />
                        )
                    })}
                </div>


            </div>
        </section>
    );
}

export default Tokens;