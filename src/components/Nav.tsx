import { MdClose } from 'react-icons/md'
import { useState, useEffect } from 'react'
import { LiaTelegramPlane } from 'react-icons/lia'
import { RxDiscordLogo } from 'react-icons/rx'
import { TfiTwitter } from 'react-icons/tfi'
import { MdKeyboardArrowUp } from 'react-icons/md'
import { motion } from 'framer-motion'

const Nav = () => {

    const navList = [

        {
            name: 'pitchdeck',
            slug: 'pitchdeck',
            type: 'external',
            link: 'https://drive.google.com/file/d/1IVxxaVEdeZfwCFvRiwWVqtaXA4H68mn1/view'
        },
        {
            name: 'roadmap',
            slug: 'roadmap',
            type: 'external',
            link: 'https://drive.google.com/file/d/1vSePaNb3F91F2ZlTXAP5eT5N1QfhQgI1/view'
        },
        {
            name: 'our team',
            slug: 'team',
            type: 'internal',
        },
        {
            name: 'gameplay',
            slug: 'gameplay',
            type: 'external',
            link: 'https://share.arcware.cloud/33034e19-bac7-4d3b-910b-e2c45c2eccd8'
        },
    ]

    const navMobile = [
        {
            name: 'pitchdeck',
            slug: 'pitchdeck',
            type: 'external',
            link: 'https://drive.google.com/file/d/1IVxxaVEdeZfwCFvRiwWVqtaXA4H68mn1/view'
        },
        {
            name: 'roadmap',
            slug: 'roadmap',
            type: 'external',
            linl: 'https://drive.google.com/file/d/1vSePaNb3F91F2ZlTXAP5eT5N1QfhQgI1/view'
        },
        {
            name: 'our team',
            slug: 'team',
            type: 'internal'
        },
        {
            name: 'whitepaper',
            slug: 'whitepaper',
            type: 'external',
            link: 'https://drive.google.com/file/d/171DBd1AvAKk3m7bn1kmtm40dnVFkHRcB/view'
        },
        {
            name: 'audit',
            slug: 'audit',
            sub: [
                {
                    title: 'interfi',
                    link: 'https://github.com/interfinetwork/project-delivery-data/blob/main/Lucidia/Lucidia_AuditReport_InterFi.pdf'
                },
                {
                    title: 'revoluzion eth',
                    link: 'https://revoluzion.app/audits/presaleeth'
                },
                {
                    title: 'revoluzion bsc',
                    link: 'https://revoluzion.app/audits/presalebsc'
                },

            ]
        },
        {
            name: 'gameplay',
            slug: 'gameplay',
            type: 'external',
            link: 'https://share.arcware.cloud/33034e19-bac7-4d3b-910b-e2c45c2eccd8'
        },
        {
            name: 'faq',
            slug: 'faq',
            type: 'internal'
        },
    ]

    const icons = [
        {
            link: '',
            icon: <LiaTelegramPlane />
        },
        {
            link: '',
            icon: <RxDiscordLogo />
        },
        {
            link: '',
            icon: <TfiTwitter />
        },
    ]

    const [audit, setAudit] = useState(false)

    const handleAudit = () => {
        setAudit(curr => !curr)
    }

    const [navActive, setNav] = useState(false)
    const [navDesktopActive, setNavDesktop] = useState(false)


    const handleNav = () => {
        setNav(curr => !curr)
    }

    const handleNavDesktop = () => {
        setNavDesktop(curr => !curr)
    }

    const [screenSize, setScreenSize] = useState(getCurrentDimension());

    function getCurrentDimension() {
        return {
            width: window.innerWidth,
            height: window.innerHeight
        }
    }

    useEffect(() => {
        const updateDimension = () => {
            setScreenSize(getCurrentDimension())
        }
        window.addEventListener('resize', updateDimension);

        if (screenSize.width >= 768) {
            setNav(false)
            setNavDesktop(false)
        }

        return (() => {
            window.removeEventListener('resize', updateDimension);
        })
    }, [screenSize])

    return (
        <>
            <nav className={`-full sm:w-[25rem] h-screen right-0 top-0 bottom-0 bg-black z-30 fixed transition-all  ease-in-out duration-500 ${navActive ? 'translate-x-0 md:translate-x-full' : 'translate-x-full'}`}>
                <div className="w-full h-[5rem] bg-prpl flex items-center justify-between px-4">
                    <img src="/hero/logo.png" alt="Logo" className="w-52 -ml-5" />
                    <MdClose className="text-cyan text-5xl cursor-pointer" onClick={handleNav} />
                </div>

                <div className="overflow-auto max-h-[90%] w-full pb-20 top-0 right-0">
                    <ul className="text-white font-secondary font-semibold uppercase px-7 w-full py-12 text-sm">
                        {navMobile.map((items, i) => {
                            return (
                                items.type === 'external' ? <a href={items.link} target="_blank" rel="noopener noreferrer" className="w-full h-full" key={i}>
                                    <motion.li initial={{ x: 100, opacity: 0 }} animate={navActive ? { x: 0, opacity: 1 } : {}} transition={{ duration: 0.7, delay: 0.5 * (i * 0.1), ease: [0.16, 0.77, 0.47, .97] }} className={`border-t-[1px] border-white/10 py-5 ${items.name === 'faq' ? 'border-b-[1px]' : ''} `}>
                                        {items.name}
                                    </motion.li>
                                </a> : items.type === 'internal' ? <a href={`${items.slug}`} className="w-full h-full" key={i}>
                                    <motion.li initial={{ x: 100, opacity: 0 }} animate={navActive ? { x: 0, opacity: 1 } : {}} transition={{ duration: 0.7, delay: 0.5 * (i * 0.1), ease: [0.16, 0.77, 0.47, .97] }} className={`border-t-[1px] border-white/10 py-5 ${items.name === 'faq' ? 'border-b-[1px]' : ''} `}>
                                        {items.name}
                                    </motion.li>
                                </a> :
                                    items.name === 'audit' ?
                                        <motion.li initial={{ x: 100, opacity: 0 }} animate={navActive ? { x: 0, opacity: 1 } : {}} transition={{ duration: 0.7, delay: 0.5 * (i * 0.1), ease: [0.16, 0.77, 0.47, .97] }} className={`border-t-[1px] border-white/10 py-5 group`} onClick={handleAudit} key={i}>
                                            <div className="w-full flex justify-between items-center cursor-pointer group-hover:text-cyan">
                                                <p className="">
                                                    {items.name}
                                                </p>
                                                <MdKeyboardArrowUp className={`text-2xl transition-all ease-in-out duration-300  ${audit ? 'rotate-0' : 'rotate-180'}`} />
                                            </div>
                                            <div className={`text-footergry  flex flex-col gap-y-2  overflow-hidden transition-all ease-in-out duration-300 ${audit ? 'max-h-[5rem] mt-4' : 'max-h-0 mt-0'} `}>
                                                {items.sub?.map((items, i) => {
                                                    return (
                                                        <a href={items.link} target="_blank" rel='noreferrer noopener' className="hover:text-white" key={i}>
                                                            {items.title}

                                                        </a>
                                                    )
                                                })}
                                            </div>
                                        </motion.li>
                                        : null
                            )
                        })}
                    </ul>

                    <div className="font-primary text-center -mt-2 px-6">
                        <h2 className="text-neon font-semibold">Join the community</h2>
                        <p className="font-medium text-white mt-6">For more details about our progress and workflow be sure to follow</p>

                        <div className="text-white flex mx-auto w-fit mt-5 gap-x-6 text-2xl">
                            {icons.map((items, i) => {
                                return (
                                    <a href={items.link} target="_blank" rel="noopener noreferer" className="" key={i}>
                                        {items.icon}
                                    </a>
                                )
                            })}
                        </div>
                    </div>
                </div>


            </nav >

            <nav className="w-full h-auto px-5 xl:py-4 py-0  absolute top-0 left-0 z-20">
                <img src="/hero/navline.webp" alt="NavLine" className="w-full absolute left-0 2xl:block top-7 right-0 hidden pointer-events-none" />


                <div className="max-w-[1400px] w-full mx-auto flex justify-between items-center mt-5">
                    <a href="/" className="">
                        <img src="/hero/newlogo.png" alt="Logo" className="w-52" />
                    </a>

                    <ul className="font-secondary font-semibold text-sm uppercase items-center gap-x-12 text-white xl:flex hidden">
                        {navList.map((items, i) => {
                            return (
                                items.type === 'external' ?
                                    <a href={items.link} target='_blank' rel="noopener noreferrer" className="" key={i}>
                                        <li className="cursor-pointer" key={i}>{items.name}</li>
                                    </a> :
                                    <a href={items.slug} className="" key={i}>
                                        <li className="cursor-pointer" key={i}>{items.name}</li>
                                    </a>

                            )
                        })}
                    </ul>

                    <div className="flex items-center gap-x-8 relative">
                        <button className="flex-col items-end gap-y-3 md:hidden flex" onClick={handleNav}>
                            <div className="w-8 h-[3px] bg-white"></div>
                            <div className="w-6 h-[3px] bg-white"></div>
                        </button>

                        <button className={` flex-col items-end gap-y-3 md:flex hidden transition-all ease-in-out duration-300 ${navDesktopActive ? 'rotate-[360deg]' : 'rotate-0'}`} onClick={handleNavDesktop}>
                            <div className={` transition-all ease-in-out duration-300 ${navDesktopActive ? 'bg-cyan rotate-[-45deg] w-8 translate-y-[9px] h-[3px]' : 'w-8 h-[3px] bg-white'}`}></div>
                            <div className={` transition-all ease-in-out duration-300  ${navDesktopActive ? 'bg-cyan rotate-[45deg] w-8 h-[3px] -translate-y-[6px]' : 'w-6 h-[3px] bg-white'}`}></div>
                        </button>

                        <div className={`w-[16rem] h-[23rem] clipped bg-bl absolute z-10 top-[3.2rem] transition-height ease-in-out duration-300  -left-[14rem] ${navDesktopActive ? 'md:max-h-[23rem] max-h-[0rem]' : 'max-h-0'}`}>
                            <div className="absolute bg-black w-[98%] h-[99%] left-0 top-0 right-0 bottom-0 m-auto clipped">
                                <div className="overflow-x-hidden max-h-[100%] w-full top-0 right-0">
                                    <ul className="font-secondary font-semibold uppercase p-4 px-7 w-full text-sm text-white">
                                        {navMobile.slice(3, 9).map((items, i) => {
                                            return (
                                                items.type === 'external' ? <a href={items.link} target="_blank" rel="noopener noreferrer" className="w-full h-full" key={i}>
                                                    <motion.li initial={{ x: 100, opacity: 0 }} animate={navDesktopActive ? { x: 0, opacity: 1 } : {}} transition={{ duration: 0.7, delay: 0.5 * (i * 0.1), ease: [0.16, 0.77, 0.47, .97] }} className={`border-b-[1px] border-white/10 py-5 `}>
                                                        {items.name}
                                                    </motion.li>
                                                </a> : items.type === 'internal' ? <a href={`#${items.slug}`} className="w-full h-full" key={i} onClick={handleNav}>
                                                    <motion.li initial={{ x: 100, opacity: 0 }} animate={navDesktopActive ? { x: 0, opacity: 1 } : {}} transition={{ duration: 0.7, delay: 0.5 * (i * 0.1), ease: [0.16, 0.77, 0.47, .97] }} className={`border-b-[1px] border-white/10 py-5`}>
                                                        {items.name}
                                                    </motion.li>
                                                </a> :
                                                    items.name === 'audit' ?
                                                        <motion.li initial={{ x: 100, opacity: 0 }} animate={navDesktopActive ? { x: 0, opacity: 1 } : {}} transition={{ duration: 0.7, delay: 0.5 * (i * 0.1), ease: [0.16, 0.77, 0.47, .97] }} className={`border-b-[1px] border-white/10 py-5 group`} onClick={handleAudit} key={i}>
                                                            <div className="w-full flex justify-between items-center cursor-pointer group-hover:text-cyan">
                                                                <p className="">
                                                                    {items.name}
                                                                </p>
                                                                <MdKeyboardArrowUp className={`text-2xl transition-all ease-in-out duration-300  ${audit ? 'rotate-0' : 'rotate-180'}`} />
                                                            </div>
                                                            <div className={`text-footergry  flex flex-col gap-y-2  overflow-hidden transition-all ease-in-out duration-300 ${audit ? 'max-h-[5rem] mt-4' : 'max-h-0 mt-0'} `}>
                                                                {items.sub?.map((items, i) => {
                                                                    return (
                                                                        <a href={items.link} target="_blank" rel='noreferrer noopener' className="hover:text-white" key={i}>
                                                                            {items.title}

                                                                        </a>
                                                                    )
                                                                })}
                                                            </div>
                                                        </motion.li>
                                                        : null
                                            )
                                        })}
                                    </ul>


                                </div>
                            </div>

                        </div>

                        <a href="https://t.me/Lucidia_io" target="_blank" rel="noopener noreferrer" className="">
                            <button className="w-[13rem] h-9 clipped bg-bl relative  font-bold items-center justify-center md:flex hidden group">
                                <div className="absolute bg-[#5e38b2] w-[98%] h-[91%] left-0 top-0 right-0 bottom-0 m-auto clipped group-hover:bg-bl transition-bg ease-in-out duration-300"></div>
                                <h1 className="font-secondary relative z-10 text-bl text-[12px] group-hover:text-black transition-color ease-in-out duration-300">MEET THE COMMUNITY</h1>
                            </button>
                        </a>
                    </div>

                </div>

                <div className="w-full h-[1px] bg-white/40 absolute left-0 right-0 -bottom-4 lg:block hidden 2xl:hidden"></div>
            </nav>
        </>
    );
}

export default Nav;