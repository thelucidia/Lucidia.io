import { ProductCardProps } from '../utils/types';

export function ProductCard({ logo, title, desc, owner, price, discount }: ProductCardProps) {
  return (
    <div className="w-full">
      <img src={`/our-product/${logo}`} alt="Hero" className="w-full" />
      <div className="bg-[#1E1E1E] p-4 flex flex-col gap-y-4">
        <div className="text-base truncate font-bold">{title}</div>
        <div className="text-base truncate">{desc}</div>
        <div className="flex justify-end text-gray-400 line-through">{discount}</div>
        <div className="lg:flex flex-row justify-between">
          <div className="mt-4 lg:mt-0 lg:w-fit flex justify-start">
            <img
              src={'/avatar1.png'}
              alt="gamer"
              className="w-[24px] h-[24px] rounded-full top-0 object-contain shrink-0 hover:cursor-pointer border border-transparent  hover:border hover:border-yellow-300 transition ease-in-out delay-150	      duration-300	"
            />
            <span className="flex items-center pl-[5px]">{owner}</span>
          </div>
          <div className="mt-4 lg:mt-0 w-full lg:w-fit bg-[#B28539] text-base flex justify-center px-1">{price}</div>
        </div>
      </div>
    </div>
  );
}
