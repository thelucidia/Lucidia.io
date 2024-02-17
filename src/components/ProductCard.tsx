import React from "react";
import { ProductCardProps } from "../utils/types";

// export function ProductCard({ hoverSrc, defaultSrc }: ImageProps) {
export function ProductCard({
  title,
  desc,
  owner,
  image,
  price,
}: ProductCardProps) {
  return (
    <div className="w-full">
      <div className="h-[200px] bg-[#0D0D0D] flex justify-center items-center">
        <img
          src={"/logo1.svg"}
          alt="Hero"
          className=" top-0 object-contain shrink-0 hover:cursor-pointer border border-transparent  hover:border hover:border-yellow-300 transition ease-in-out delay-150	      duration-300	"
        />
      </div>
      <div className="bg-[#1E1E1E] p-6">
        <div className="text-lg font-bold h-[50px]">{title}</div>
        <div className="pt-2 text-lg truncate">{desc}</div>
        <div className="pt-2 text-lg text-right text-[#AAAAAA] line-through">
          {price}
        </div>
        <div className="mt-2 lg:flex justify-between items-center">
          <div className="flex items-center">
            <img src={image} width={40} />
            <div className="ml-4 text-base">{owner}</div>
          </div>
          <div className="mt-4 lg:mt-0 p-1 w-full lg:w-fit bg-[#B28539] text-lg flex justify-center">
            {price}
          </div>
        </div>
      </div>
    </div>
  );
}
