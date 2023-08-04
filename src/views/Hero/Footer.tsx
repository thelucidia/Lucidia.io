
import { LiaTelegramPlane } from 'react-icons/lia'
import { TfiTwitter } from 'react-icons/tfi'
import { AiOutlineYoutube, AiOutlineMail } from 'react-icons/ai'
import { FaRedditAlien, FaInstagram, FaMobileAlt } from 'react-icons/fa'
import { RiTiktokLine } from 'react-icons/ri'
import { RxDiscordLogo } from 'react-icons/rx'

const Footer = () => {

    const icons = [
        {
            link: 'https://t.me/Lucidia_io',
            icon: <LiaTelegramPlane />
        },
        {
            link: 'https://discord.gg/lucidia',
            icon: <RxDiscordLogo />
        },
        {
            link: 'https://twitter.com/lucidia_io',
            icon: <TfiTwitter />
        },
        {
            link: 'https://youtube.com/@lucidia_official',
            icon: <AiOutlineYoutube />
        },
        {
            link: 'https://www.reddit.com/r/LucidiaMetaverse/',
            icon: <FaRedditAlien />
        },
        {
            link: 'https://instagram.com/lucidia_official',
            icon: <FaInstagram />
        },
        {
            link: 'https://www.tiktok.com/@lucidia.io',
            icon: <RiTiktokLine />
        },
    ]

    const general = [
        {
            title: 'PRIVACY POLICY',
            link: 'https://lucidia.io/privacy-policy/'
        },
        {
            title: 'TERMS AND CONDITIONS',
            link: 'https://lucidia.io/terms-and-conditions/'
        },
        {
            title: 'TOKEN SALE TERMS AND CONDITIONS',
            link: 'https://lucidia.io/token-sale-terms-and-conditions/'
        },
        
    ]

    const company = [

        {
            title: 'contact us',
            link: 'contact@lucidia.io'
        },
        {
            title: 'FREQUENTLY ASKED QUESTIONS',
            link: ''
        },
        {
            title: 'ANTI-MONEY LAUNDERING POLICY',
            link: 'https://lucidia.io/anti-money-laundering-policy/'
        },
        
    ]

    const handleScrollTop = () => {
        window.scrollTo(0, 0)
    }

    return (
        <footer className="w-full h-auto min-h-screen relative pb-16">

            <div className="max-w-[1400px] mx-auto w-full text-white sm:mt-28 mt-10 px-5 text-left sm:text-center">
                <div className="mt-10">
                    <h1 className="sm:text-[46px] text-[32px] font-bold leading-tight font-primary bg-clip-text bg-gradient-to-r w-fit sm:mx-auto  from-white via-white to-[#c4f4fe] text-transparent">
                        Join community of 100k+ Lucidians
                    </h1>
                    <p className="font-medium font-primary text-footergry text-[15px] sm:text-[22px] mt-2 sm:mt-0">For more details about our progress and workflow be sure to follow</p>
                </div>

                <ul className="flex w-fit sm:mx-auto mt-12 text-2xl sm:text-4xl sm:gap-x-7 gap-x-5">
                    {icons.map((items, i) => {
                        return (
                            <li className="hover:scale-[1.1] transition-all ease-in-out duration-300 hover:text-cyan " key={i}>
                                <a href={items.link} target="_blank" rel="noopener noreferrer" className="">
                                    {items.icon}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </div>

            <img src="/hero/navline.webp" alt="navline" className="sm:mt-28 mx-auto w-full object-cover relative left-0 right-0 opacity-70 sm:block hidden" />

            <div className="max-w-[1400px] mx-auto w-full text-white sm:mt-28 flex justify-between px-5 lg:pr-12 gap-x-10 lg:flex-row flex-col sm:border-t-0 border-t-[1.5px] mt-10 border-white/20">
                <div className="mt-10 sm:mt-0">
                    <img src="/hero/logo.webp" alt="Logo" className="" />
                    <p className="font-primary font-medium max-w-[33rem] mt-7">YOUR JURISDICTION MAY NOT REGULATE CRYPTOCURRENCIES. THE VALUE OF CRYPTOCURRENCIES MAY RISE AND FALL. PROFITS MAY BE SUBJECT TO CAPITAL GAINS TAXES OR OTHER LOCAL TAXES.</p>
                    <div className="text-footergry flex items-center gap-x-7 sm:gap-x-16 mt-5">
                        <div className="flex items-center gap-x-[5px]">
                            <AiOutlineMail className="text-white text-2xl" />
                            <a href="mailto:hello@lucidia.io" className="font-medium font-primary">
                                hello@lucidia.io
                            </a>
                        </div>

                        <div className="flex items-center gap-x-[5px]">
                            <FaMobileAlt className="text-white text-xl" />
                            <p className="font-medium font-primary">347-519-5430</p>
                        </div>
                    </div>
                </div>

                <div className="font-primary flex gap-x-20 lg:flex-row flex-col gap-y-8 mt-11 lg:mt-0">
                    <div className="">
                        <h2 className="font-semibold text-[22px]">GENERAL</h2>
                        <ul className="flex flex-col gap-y-2 mt-8">
                            {general.map((items, i) => {
                                return (
                                    <li className="font-secondary font-semibold text-sm text-footergry relative w-fit hover:text-white transition-colors ease-in-out duration-300" key={i}>
                                        <div className={`w-7 h-3 bg-grn absolute -right-9 top-0 bottom-0 my-auto flex items-center justify-center ${i === 0 ? 'block' : 'hidden'}`}>
                                            <h5 className="text-[8px] font-primary font-bold text-center text-black mt-[2px]">NEW</h5>
                                        </div>
                                        <a href={items.link} target="_blank" rel="noopener noreferrer" className="">
                                            {items.title}
                                        </a>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>

                    <div className="">
                        <h2 className="font-semibold text-[22px]">COMPANY</h2>
                        <ul className="flex flex-col gap-y-2 mt-8">
                            {company.map((items, i) => {
                                return (
                                    <li className="font-secondary font-semibold text-sm text-footergry relative w-fit uppercase hover:text-white transition-colors ease-in-out duration-300" key={i}>
                                        <div className={`w-7 h-3 bg-cyan absolute -right-9 top-0 bottom-0 my-auto flex items-center justify-center ${i === 2 ? 'block' : 'hidden'}`}>
                                            <h5 className="text-[8px] font-primary font-bold text-center text-black mt-[2px]">NEW</h5>
                                        </div>
                                        <a href={items.title === 'contact us' ? 'mailto:contact@lucidia.io' : items.link} target="_blank" rel="noopener noreferrer" className="">
                                            {items.title}
                                        </a>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>


            </div>

            <img src="/hero/navline.webp" alt="navline" className="mt-10 mx-auto w-full object-cover relative left-0 right-0 opacity-70 sm:block hidden" />

            <div className="max-w-[1400px] mx-auto w-full text-white sm:mt-16 flex justify-between items-center px-5 sm:border-t-0 border-t-[1.5px] mt-20 pt-12 sm:pt-0 border-white/20">
                <div className="">
                    <h3 className="font-secondary text-sm font-semibold uppercase">© Lucidia 2023 | All rights reserved.</h3>
                    <p className="text-[12px] text-footergry font-secondary mt-2">YOUR JURISDICTION MAY NOT REGULATE CRYPTOCURRENCIES. THE VALUE OF CRYPTOCURRENCIES MAY RISE AND FALL. PROFITS MAY BE SUBJECT TO CAPITAL GAINS TAXES OR OTHER LOCAL TAXES.
                    </p>
                </div>

                <button className="sm:block hidden flex-shrink-0" onClick={handleScrollTop}>
                    <img src="/iconup.webp" alt="Icon" className="w-8 h-8" />
                </button>

            </div>


        </footer>
    );
}

export default Footer;