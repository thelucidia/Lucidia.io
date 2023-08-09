import { MdOutlineOpenInNew } from 'react-icons/md'
import { IoMdInformationCircleOutline } from 'react-icons/io'

const How = () => {

    const data = [
        {
            title: "Option 1: Buy ETH or BNB with a Card",
            value: [
                <p>Go to <a href="https://moonpay.com/buy" target="-blank" rel="noopener noreferrer" className="text-grn">https://moonpay.com/buy</a> and purchase ETH or BNB using your card. The purchased ETH or BNB will be sent to your wallet. It is recommended to buy a minimum of $20 worth of ETH or $5 worth of BNB to cover the minimum purchase of $LUCID tokens.</p>,
                <p>Enter the amount you wish to invest</p>,
                <p>Choose your bonus option - it will be available one month after TGE</p>
            ]
        },
        {
            title: "Option 2: Buy $LUCID with ETH or BNB",
            value: [
                <p>Ensure you have enough ETH or BNB in your wallet &#40;if not, refer to option 1&#41;. Enter the amount of $LUCID you want to purchase &#40;minimum $15&#41; and click Buy with ETH or Buy with BNB. Confirm the transaction in your wallet and review the gas cost</p>,
                <p>Enter the amount you wish to invest</p>,
                <p>Choose your bonus option - it will be available one month after TGE</p>
            ]
        },
        {
            title: "Option 3: Buy $LUCID with USDT",
            value: [
                <p>Make sure you have at least $20 worth of USDT in your wallet.</p>,
                <p>Enter the amount you wish to invest</p>,
                <p>Choose your bonus option - it will be available one month after TGE</p>,
                <p>You will need to approve the purchase twice. The first approval is for the USDT contract, and the second is for the transaction amount. Complete both approval steps to finalize the transaction.</p>
            ]
        }
    ];

    return (
        <section className="w-full min-h-screen relative py-10 sm:pt-28 pt-16">

            <img src="/tokentr.webp" alt="Coin" className="w-[5rem] absolute -top-7 right-0 sm:hidden block" />

            <div className="w-full h-full overflow-hidden px-5">
                <div className="max-w-[1400px] w-full mx-auto flex lg:gap-x-32 justify-center lg:flex-row flex-col lg:items-start items-center">

                    <div className="md:w-[60%]  text-white relative z-10 text-center lg:text-left">
                        <h1 className="font-medium text-transparent text-2xl sm:text-3xl md:text-4xl font-primary bg-clip-text bg-gradient-to-r from-white via-[#cab8ff] to-white sm:max-w-[12rem] mx-auto lg:mx-0">How to buy $LUCID?</h1>
                        <p className="font-primary font-medium mt-5">
                            Have more questions? Send them to our <a href="https://t.me/Lucidia_io" className="text-grn underline underline-offset-4">Telegram Chat</a> and the Community Managers will answer them in a matter of minutes!
                        </p>


                        <div className=" flex flex-col gap-y-4 mt-14 sm:mt-20 ">
                            <a href="https://drive.google.com/file/d/1xXjWFQoPwON15ug-cTOD0RV1bCjSA31g/view" target='_blank' rel="noopener noreferrer" className="">
                                <button className="w-full lg:w-[15rem] h-11 clipped2 bg-gradient-to-bl from-white to-[#0ED4FF] relative group font-bold flex items-center justify-center scale-x-[-1]">
                                    <div className="absolute bg-black w-[98%] h-[93%] left-0 top-0 right-0 bottom-0 m-auto clipped2">

                                    </div>

                                    <div className="absolute bg-gradient-to-bl from-white to-[#0ED4FF]  w-full h-full left-0 top-0 right-0 bottom-0 m-auto clipped2 opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-300">

                                    </div>
                                    <h1 className="font-secondary relative z-10 text-white font-[700] text-[12px] scale-x-[-1] group-hover:text-black transition-colors ease-in-out duration-300">TOKEN ALLOCATION</h1>
                                </button>
                            </a>

                            <a href="" target='_blank' rel="noopener noreferrer" className="">
                                <button className="w-full lg:w-[15rem] h-11 clipped2 bg-gradient-to-bl from-white to-[#0ED4FF] relative group font-bold flex items-center justify-center scale-x-[-1]">
                                    <div className="absolute bg-black w-[98%] h-[93%] left-0 top-0 right-0 bottom-0 m-auto clipped2">

                                    </div>

                                    <div className="absolute bg-gradient-to-bl from-white to-[#0ED4FF]  w-full h-full left-0 top-0 right-0 bottom-0 m-auto clipped2 opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-300">

                                    </div>
                                    <h1 className="font-secondary relative z-10 text-white font-[700] text-[12px] scale-x-[-1] group-hover:text-black transition-colors ease-in-out duration-300">VIDEO INSTRUCTIONS</h1>
                                </button>
                            </a>

                            <a href="https://finance.lucidia.io/" target='_blank' rel="noopener noreferrer" className="">
                                <button className="w-full lg:w-[15rem] h-11 clipped2 bg-gradient-to-bl from-white to-[#0ED4FF] relative group font-bold flex items-center justify-center scale-x-[-1]">
                                    <div className="absolute bg-black w-[98%] h-[93%] left-0 top-0 right-0 bottom-0 m-auto clipped2">

                                    </div>

                                    <div className="absolute bg-gradient-to-bl from-white to-[#0ED4FF]  w-full h-full left-0 top-0 right-0 bottom-0 m-auto clipped2 opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-300">

                                    </div>
                                    <h1 className="font-secondary relative z-10 text-white font-[700] text-[12px] scale-x-[-1] group-hover:text-black transition-colors ease-in-out duration-300">BUY $LUCID</h1>
                                </button>
                            </a>

                        </div>

                        <img src="/coins.webp" alt="Coins" className="mt-16 w-[40rem] sm:block hidden" />
                        <img src="/token.webp" alt="Coin" className="w-[15.5rem] absolute -bottom-[15rem] -right-20 sm:hidden block" />
                    </div>
                    <div className="sm:w-[58.9%] flex flex-col gap-y-5 sm:mt-0 mt-[10rem]">

                        <div className="w-full h-auto clipped2 bg-gry relative  font-bold flex items-center justify-center scale-x-[-1] rounded-md">
                            <div className="scale-x-[-1] text-white w-full h-full p-5 md:md:border-l-[0.5rem] border-grn rounded-md">
                                <h1 className="font-secondary font-bold text-grn text-lg">STEP #01</h1>

                                <h2 className="text-cyan font-primary font-medium text-lg w-fit mt-3">
                                    <a href="https://finance.lucidia.io/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-x-[5px]">
                                        Visit <span className="text-white"><MdOutlineOpenInNew /></span> finance.lucidia.io
                                    </a>
                                </h2>


                                <p className="mt-8">Click the "<span className="text-grn text-lg">Connect Wallet</span>" button in the top right corner and log in using your preferred wallet. Make sure you have a browser extension wallet like <span className="inline-flex items-center relative w-5"><img src="/metamask.webp" alt="Metamask" className="inline-image w-6 absolute left-0 -bottom-[3px]" /></span> MetaMask installed on your desktop or use a supported mobile wallet like <span className="inline-flex items-center relative w-5"><img src="/shield.webp" alt="Metamask" className="inline-image w-6 absolute left-0 -bottom-[3px]" /></span> Trust Wallet</p>


                                <div className="flex items-center gap-x-[6px] text-sm font-primary font-medium mt-6">
                                    <IoMdInformationCircleOutline className="text-3xl" />
                                    <p className="text-md">We recommend using MetaMask on desktop for a smoother experience, or Trust Wallet on mobile.</p>
                                </div>

                                <h3 className="font-primary font-medium mt-8">Click the "<span className="text-grn">BUY $LUCID</span>" button.</h3>
                            </div>
                        </div>

                        <div className="w-full h-auto clipped2 bg-gry relative flex items-center justify-center scale-x-[-1] rounded-md">
                            <div className="scale-x-[-1] text-white w-full h-full p-5 pb-6 md:border-l-[0.5rem] border-grn rounded-md">
                                <h1 className="font-secondary font-bold text-grn text-lg">STEP #02</h1>

                                <div className="flex flex-col gap-y-6">
                                    {data.map((items, i) => {
                                        return (
                                            <div key={i} className='font-primary'>
                                                <h2 className="text-white font-primary font-medium text-lg w-fit mt-3">
                                                    {items.title}
                                                </h2>
                                                <ul className="mt-8 font-medium">
                                                    {items.value.map((items, i) => {
                                                        return (
                                                            <li className="flex items-start gap-x-2" key={i}>
                                                                •
                                                                {items}
                                                            </li>
                                                        )
                                                    })}
                                                </ul>
                                            </div>
                                        )
                                    })}
                                </div>

                            </div>
                        </div>

                        <div className="w-full h-auto clipped2 bg-gry relative flex items-center justify-center scale-x-[-1] rounded-md">
                            <div className="scale-x-[-1] text-white w-full h-full p-5 pb-6 md:border-l-[0.5rem] border-grn rounded-md font-primary font-medium">
                                <h1 className="font-secondary font-bold text-grn text-lg">STEP #03</h1>

                                <p className="flex items-start gap-x-2">
                                    <span className="">•</span>
                                    <span className="">
                                        Enter your Telegram username to receive an additional <span className="underline text-grn underline-offset-4">5% bonus</span> for each user you refer. A referral link will be generated after this step.
                                    </span>

                                </p>

                                <p className="flex items-start gap-x-2">
                                    <span className="">•</span>
                                    Copy your referral link from the bottom of the page, and you're all set!
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </section>
    );
}

export default How;