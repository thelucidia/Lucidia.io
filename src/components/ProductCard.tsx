import { ProductCardProps } from '../utils/types';

export function ProductCard({ title, desc, price }: ProductCardProps) {
  return (
    <div className="w-full">
      <div className="h-[200px] bg-[#0D0D0D] flex justify-center items-center">
        <img
          src={'/logo1.svg'}
          alt="Hero"
          className=" top-0 object-contain shrink-0 hover:cursor-pointer border border-transparent  hover:border hover:border-yellow-300 transition ease-in-out delay-150	      duration-300	"
        />
      </div>
      <div className="bg-[#1E1E1E] p-4 flex flex-col gap-y-4">
        <div className="text-base truncate font-bold">{title}</div>
        <div className="text-base truncate">{desc}</div>
        <div className="pt-3 lg:flex flex-row justify-end">
          <div className="mt-4 lg:mt-0 px-1 w-full lg:w-fit bg-[#B28539] text-base flex justify-center">{price}</div>
        </div>
      </div>
    </div>
  );
}
