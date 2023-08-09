import { BsDiscord } from 'react-icons/bs'
import { PiTelegramLogoBold } from 'react-icons/pi'
import { SiTwitter } from 'react-icons/si'
import MainVideo from '../../../videos/hero.mp4'
import { useState } from 'react'


const Hero = () => {

    const community = [

        {
            link: 'https://t.me/Lucidia_io',
            icon: <PiTelegramLogoBold />
        },
        {
            link: 'https://discord.com/invite/lucidia',
            icon: <BsDiscord />
        },
        {
            link: 'https://twitter.com/lucidia_io',
            icon: <SiTwitter />
        },
    ]

    const audited = [
        {
            name: 'inter',
            link: 'https://www.interfi.network/audits'
        },
        {
            name: 'rev',
            link: 'https://www.revoluzion.io/audit'
        },

    ]

    const [trueLoading, setTrueLoading] = useState(true)

    const handleTrue = () => {
        setTimeout(() => {
            setTrueLoading(false)
        }, 1500);
    }

    return (
        <section className="w-full min-h-screen p-5 relative text-white flex md:items-center justify-center">
            <div className={`w-full h-screen bg-black fixed z-30 top-0 left-0 flex flex-col items-center justify-center  transition-all ease-in-out duration-300 ${trueLoading ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} `}>
                <div className={`animate-pulse flex justify-center items-center flex-col`}>
                    <img src="/logo.webp" alt="Logo" className="w-24" />
                    <h1 className="font-primary font-semibold text-2xl mt-10 tracking-widest">LOADING</h1>
                </div>
            </div>
            <video
                autoPlay
                muted
                loop
                src={MainVideo}
                preload={'auto'}
                onLoadedData={handleTrue}
                playsInline
                className="w-full h-screen object-cover absolute top-0 left-0"
            />

            <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-b from-prpl/50 to-black z-10"></div>

            {/* <img src="/hero/herobg.webp" alt="Herobg" className="w-full h-full object-cover absolute top-0 left-0" /> */}

            <div className="max-w-[1400px] w-full h-auto mx-auto relative z-10 flex mt-[7rem] md:mt-[10rem] flex-col-reverse md:flex-row">

                <div className="w-full">
                    <h1 className="font-primary text-3xl md:text-5xl 2xl:text-[72px] max-w-[40rem] 2xl:leading-[5.5rem] font-semibold md:block hidden">AI DRIVEN GAMEFI GOVERNED BY YOU</h1>

                    <div className=" max-w-[37rem] font-primary font-medium flex flex-col gap-y-5 md:flex md:text-base text-sm">
                        <p className="">We are not looking to reinvent the wheel of Gamification and game plots - just to give you the power and ownership over what you have already been doing for years.</p>

                        <p className="">
                            Our goal is to put fun back into GameFi and make the Metaverse experience accessible to any user with a mobile device from any corner of the world.
                        </p>
                    </div>

                    <div className="flex gap-x-3 mt-10 md:flex-row flex-col gap-y-5">
                        <a href="https://finance.lucidia.io/" target='_blank' rel='noopener noreferrer' className="">
                            <button className=" w-full md:w-[9rem] h-14 clipped2  relative  font-bold flex items-center justify-center scale-x-[-1]">
                                <div className="absolute bg-cyan w-full h-full left-0 top-0 right-0 bottom-0 m-auto clipped2 bg-gradient-to-bl from-white to-[#0ED4FF]"></div>
                                <h1 className="font-secondary relative z-10 text-black font-[700] text-[12px] scale-x-[-1]">BUY $LUCID</h1>
                            </button>
                        </a>

                        <a href="https://drive.google.com/file/d/1xXjWFQoPwON15ug-cTOD0RV1bCjSA31g/view" target='_blank' rel='noopener noreferrer' className="">
                            <button className=" w-full md:w-[13rem] h-14 clipped2 bg-white relative  font-bold flex items-center justify-center scale-x-[-1] group">
                                <div className="absolute bg-[#2e194c] w-[98%] h-[96%] left-0 top-0 right-0 bottom-0 m-auto clipped2 group-hover:bg-white transition-bg ease-in-out duration-300">
                                    <img src="/hero/trans.webp" alt="Herobg" className="w-full h-full object-cover absolute top-0 left-0 group-hover:opacity-0 transition-opacity ease-in-out duration-300" />

                                </div>
                                <h1 className="font-secondary relative z-10 text-white font-[700] text-[12px] scale-x-[-1] group-hover:text-black  transition-colors ease-in-out duration-300">TOKEN ALLOCATION</h1>
                            </button>
                        </a>
                    </div>

                    <div className="mt-20 flex md:items-start gap-x-8 md:flex-row flex-col gap-y-9">
                        <div className="">
                            <h1 className="font-primary font-medium">Join community of 100k+ Lucidians</h1>
                            <ul className="flex items-center gap-x-4 text-2xl mt-4">
                                {community.map((items, i) => {
                                    return (
                                        <a href={items.link} target="_blank" rel="noopener noreferrer" className="sm:opacity-40 hover:opacity-100" key={i}>
                                            {items.icon}
                                        </a>
                                    )
                                })}
                            </ul>
                        </div>
                        <div className="h-16 w-[1px] bg-white/10 md:block hidden"></div>
                        <div className="">
                            <h1 className="font-primary font-medium">Audited by:</h1>
                            <ul className="flex items-center gap-x-7 text-2xl mt-4">
                                {audited.map((items, i) => {
                                    return (
                                        <a href={items.link} target="_blank" rel="noopener noreferrer" className="" key={i}>
                                            <img src={`/hero/${items.name}.webp`} alt={items.name} className="" key={i} />
                                        </a>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="w-full relative flex">
                    <h1 className="font-primary text-3xl md:text-5xl 2xl:text-[72px] max-w-[40rem] 2xl:leading-[5.5rem] font-semibold md:hidden block">AI DRIVEN GAMEFI GOVERNED BY YOU</h1>
                    <img src="/hero/hero.webp" alt="Hero" className="object-cover top-0 md:w-auto h-[30vh] sm:h-[35vh] -mt-4 md:h-[70vh] mx-auto " />
                </div>

            </div>
        </section>
    );
}

export default Hero;