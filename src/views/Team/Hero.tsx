import { BsLinkedin } from 'react-icons/bs'

const Hero = () => {

    const members = [
        {
            name: 'Adel Khatib',
            position: 'CHIEF EXECUTIVE OFFICER',
            link: 'https://www.linkedin.com/in/adel-khatib-b2b136180/',
            desc: [
                'Samsung Mena Partner (6 yrs)',
                'Electric fleet partner with Uber (2 yrs)',
                'Crypto/blockchain expert (10 yrs)',
                'Serial entrepreneur & gamer (15 yrs)'
            ]
        },
        {
            name: 'Feras Nimer',
            position: 'CHIEF OPERATION OFFICER',
            link: 'https://www.linkedin.com/in/feras-nimer-691a3258/',
            desc: [
                'Business transformation at EY (5 yrs)',
                'Project management (6 yrs)',
                'Crypto investor (4 yrs)',
                'Entrepreneur (5 yrs)'
            ]
        },
        {
            name: 'Ahmad Assaf',
            position: 'CHIEF TECHNOLOGY OFFICER',
            link: 'https://www.linkedin.com/in/ahmadassaf/',
            desc: [
                'AI & data expert (14 yrs)',
                'Crypto/tech enthusiast (5 yrs)',
                'Software engineer (18 yrs)',
                'Entrepreneur (10 yrs)'
            ]
        },
        {
            name: 'Den Smolonski',
            position: 'SENIOR BLOCKCHAIN DEVELOPER',
            link: 'https://www.linkedin.com/in/den-smolonski-648051100/',
            desc: [
                'Full Stack Developer (8 yrs)',
                'DeFi Developer',
                'GameFi Developer',
                'Blockchain industry (4 yrs)'
            ]
        },
        {
            name: 'Jahongir Erkinov',
            position: 'CHIEF METAVERSE OFFICER',
            link: 'https://www.linkedin.com/in/jakhongirerkinov/',
            desc: [
                'Unreal Engine developer (6 yrs)',
                'Unity Engine developer (4 yrs)',
                'Mobile/PC/VR game dev (4 yrs)',
                'Gamer (10 yrs)'
            ]
        },
        {
            name: 'Matsushima Goro',
            position: 'BLOCKCHAIN DEVELOPER',
            link: 'https://www.linkedin.com/in/matsushima-goro-bb6b2326b/',
            desc: [
                'Blockchain expert (4 yrs)',
                'Rust specialist (2 yrs)',
                'Solidity proficient (4 yrs)',
                'Frontend developer (6 yrs)'
            ]
        },
        {
            name: 'Oskar Krzak',
            position: 'BUSINESS DEVELOPMENT MANAGER',
            link: 'https://www.linkedin.com/in/krzakoskar/',
            desc: [
                'Product Manager (7 yrs)',
                'Blockchain industry (6 yrs)',
                'Gamer (15  yrs)'
            ]
        },
        {
            name: 'Marius Dommersnes',
            position: 'CHIEF MARKETING OFFICER',
            link: 'https://www.linkedin.com/in/marius-dommersnes-455a30177/',
            desc: [
                'Blockchain industry (3 yrs)',
                'Presales & IDO (2 yrs)',
                'Web3 marketing (2 yrs)'
            ]
        },
        {
            name: 'Victoria Iskiyaeva',
            position: 'CHIEF MARKETING OFFICER',
            link: 'https://www.linkedin.com/in/victoria-iskiyaeva-851359213/',
            desc: [
                'Web3 Marketing (3 yrs)',
                'Social Media Management (4 yrs)',
                'Digital Marketing (4 yrs)'
            ],
        },
        {
            name: 'Rula Madi',
            position: 'HEAD OF LEGAL',
            link: 'https://www.linkedin.com/in/rolamadi/',
            desc: [
                'Corporate & tech/IP law (20 yrs)',
                'Senior management adviser',
                'Legal associations member'
            ],
        },
        {
            name: 'Al Rizqi',
            position: 'ASIA & CIS COMMUNITY MANAGER',
            link: 'https://www.linkedin.com/in/al-rizqi/',
            desc: [
                'Community Manager (2 yrs)',
                'Project Management (3 yrs)',
                'Marketing (5 yrs)'
            ],
        },
        {
            name: 'Sander Kloet',
            position: 'EMEA & NA COMMUNITY MANAGER',
            link: 'https://www.linkedin.com/in/sander-kloet-278b68278/',
            desc: [
                'Community Manager (4 yrs)',
                'Social Media Manager (4 yrs)',
                'Digital Marketing (3 yrs)'
            ],
        },
    ]

    return (
        <section className="w-full min-h-screen relative text-white overflow-hidden bg-bg">
            <img src="/team/bg.webp" alt="Teambg" className="w-full h-screen object-cover absolute left-0 " />

            <div className="max-w-[1400px] w-full h-auto mx-auto relative z-10 font-primary md:mt-[12rem] mt-[6rem] flex items-center justify-center px-6">

                <img src="/token.webp" alt="token" className="absolute top-16 -right-6 z-10 w-28 md:hidden block rotate-90" />

                <img src="/team/left.webp" alt="Left" className="-mb-20 xl:block hidden" />
                <div className="flex flex-col sm:gap-y-6 md:items-center justify-center w-fit md:mx-auto flex-shrink-0">
                    <h2 className="text-grn md:text-center text-lg font-medium uppercase text-left">lucidians</h2>
                    <h1 className="2xl:text-[72px] text-[54px] font-semibold leading-[3.5rem]">MEET OUR CRYPT EXPERTS</h1>
                    <p className="text-lg font-medium">At Lucidia we believe that the true, fully immersive metaverse is just around the corner.</p>
                </div>
                <img src="/team/right.webp" alt="Left" className="-mb-32 xl:block hidden" />
            </div>

            <img src="/hero/navline.webp" alt="NavLine" className="w-full relative z-10 mt-16 opacity-50 md:block hidden" />

            <div className="max-w-[1400px] w-full mx-auto h-auto relative z-10 flex flex-wrap gap-3 px-6 mt-24 items-center justify-center">
                <img src="/token.webp" alt="token" className="absolute -top-6 -right-4 z-10 w-16 md:hidden block" />

                {members.map((items, i) => {
                    return (

                        <div className="w-[23rem] h-[30.9rem] hover:from-prpl hover:via-prpl hover:to-prpl bg-gradient-to-b from-gry via-gry to-prpl clipped2 scale-x-[-1] relative" key={i}>
                            <div className="w-[99.5%] bg-black h-[99.5%] absolute clipped2  m-auto top-0 bottom-0 left-0 right-0 shadow-teamShadow">
                                <div className="w-full h-full scale-x-[-1] relative z-10">
                                    <a href={items.link} target="_blank" rel="noreferrer noopener" className="">
                                        <BsLinkedin className="top-5 left-5 absolute z-10 text-2xl text-prpl" />
                                    </a>

                                    <img src={`/team/${i}.webp`} alt={items.name} className="absolute w-full h-full top-0 left-0 object-cover" />


                                    <div className="w-full h-28 bg-[#4a069c] bottom-0 left-0 absolute blur-[4rem] z-0"></div>

                                    <div className="absolute bottom-5 left-6 z-10">
                                        <h1 className="font-primary text-[25px] font-semibold">{items.name}</h1>

                                        <h2 className="font-secondary font-semibold mt-[5px] text-neon">{items.position}</h2>

                                        <ul className="font-primary font-medium text-[15px] mt-5">
                                            {items.desc.map((items, i) => {
                                                return (
                                                    <li className="" key={i}>{items}</li>
                                                )
                                            })}
                                        </ul>

                                    </div>
                                </div>

                            </div>

                        </div>
                    )
                }
                )}

            </div>

            <div className="w-full h-auto py-10 bg-grn mt-20 px-10">
                <h1 className="text-[54px] text-black text-center font-secondary font-bold leading-tight">Want to join our team?</h1>

                <a href="https://forms.gle/3zJDupBPggQSKA8L7" target='_blank' rel='noopener noreferrer' className="">
                    <button className=" w-full md:w-[14.5rem] py-[0.7rem] clipped2 bg-black relative  font-bold flex items-center justify-center scale-x-[-1] mx-auto mt-3">
                        <div className="absolute bg-grn w-[98.5%] h-[92%] left-0 top-0 right-0 bottom-0 m-auto clipped2"></div>
                        <h1 className="font-secondary relative z-10 text-black font-[700] text-[14px] scale-x-[-1]">APPLY NOW &gt;</h1>
                    </button>
                </a>
            </div>
        </section>
    );
}

export default Hero;