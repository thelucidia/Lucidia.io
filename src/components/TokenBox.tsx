import { FunctionComponent } from "react";

interface TokenBox {
    title: string,
    slug: string
    desc: string
    img: string
}


const TokenBox: FunctionComponent<TokenBox> = ({ title, slug, desc, img }) => {
    return (

        <div className="max-w-[42rem] w-full h-[17.3rem] md:h-[20rem] clipped2 bg-gry hover:bg-[#76717b] transition-bg ease-in-out duration-300  group relative flex items-center justify-center scale-x-[-1] text-white">
            <div className="scale-x-[-1] w-full h-full p-5 relative overflow-hidden group-hover:shadow-tokenHover transition-shadow ease-in-out duration-300">

                <h1 className="text-[#2A2B2F] absolute -top-20 right-0 text-[200px] font-primary font-bold uppercase md:block hidden group-hover:opacity-0 select-none transition-opacity ease-in-out duration-[0.1s]">{slug}</h1>

                <div className="absolute bottom-7 left-5 md:left-9 pr-3">
                    <img src={`/token/${img}.webp`} alt={slug} className="mb-5" />
                    <h1 className="font-primary font-[700] uppercase text-[2.2rem]">{title}</h1>
                    <p className="text-[#B4B6BF] font-[600] font-primary leading-[145%] max-w-[23rem] md:text-base text-sm group-hover:text-white">{desc}</p>
                </div>
            </div>

        </div>

    );
}

export default TokenBox;