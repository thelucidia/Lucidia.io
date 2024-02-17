import { FunctionComponent, ReactNode } from "react";
import { cn } from "../utils";

interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  children: ReactNode;
  className?: string;
  stretchOnMobile?: boolean;
  removeOnMobile?: boolean;
}

export const Button: FunctionComponent<ButtonProps> = ({
  children,
  className,
  stretchOnMobile,
  removeOnMobile,
  ...props
}) => {
  return (
    <button
      className={cn(
        "w-44 relative flex items-center justify-center font-primary text-center rounded-sm hover:bg-grn transition-all ease-in-out duration-300 text-secondary group py-4 sm:hover:text-primary",
        className
      )}
      {...props}
    >
      <div
        className={cn(
          "w-full h-[calc(50%-0.48rem)] top-2 bg-primary absolute clip-top opacity-0 transition-ll ease-in-out duration-500 sm:group-hover:opacity-100 sm:group-hover:scale-y-[0.1] origin-top"
        )}
      ></div>
      <div
        className={cn( 
          "w-full h-[calc(50%-0.48rem)] bottom-2 bg-primary absolute  clip-bottom opacity-0 transition-all ease-in-out duration-500 sm:group-hover:opacity-100  sm:group-hover:scale-y-[0.1] origin-bottom"
        )}
      ></div>
      <div className="sm:group-hover:opacity-0 opacity-100 transition-all duration-500">
        <svg
          width="280"
          height="36"
          viewBox="0 0 280 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={cn("w-full h-full absolute top-0 left-0 hidden", {
            "md:hidden block": stretchOnMobile,
          })}
        >
          <path
            d="M1.48997 18L20.2671 1H259.733L278.51 18L259.733 35H20.2671L1.48997 18Z"
            stroke="#F0F0F0"
            strokeWidth="2"
          />
        </svg>

        <div className="w-full h-full absolute top-0 left-0 px-[5px] transition-all ease-in-out duration-300">
          <svg
            width="268"
            height="28"
            viewBox="0 0 268 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={cn(
              "w-full h-full absolute top-0 left-0 hidden  scale-x-[0.96]",
              {
                "md:hidden block": stretchOnMobile,
              }
            )}
          >
            <path
              d="M15.9125 0H252.087L268 14L252.087 28H15.9125L0 14L15.9125 0Z"
              fill="#B38539"
            />
          </svg>
        </div>

        <svg
          width="169"
          height="45"
          viewBox="0 0 169 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={cn("absolute top-0 left-0 w-full h-full block", {
            "md:block hidden": stretchOnMobile || removeOnMobile,
          })}
        >
          <path
            d="M1.20185 18L12.5352 1H156.465L167.798 18L156.465 35H12.5352L1.20185 18Z"
            stroke="#F0F0F0"
            strokeWidth="2"
          />
        </svg>
        <div className="w-full h-full absolute top-0 left-0 transition-all ease-in-out">
          <svg
            width="161"
            height="28"
            viewBox="0 0 161 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={cn(
              "absolute top-0 left-0 w-full h-full block scale-x-[0.957]",
              {
                "md:block hidden": stretchOnMobile,
              }
            )}
          >
            <path
              d="M10 0H151L160.5 14L151 28H10L0.5 14L10 0Z"
              fill="#B38539"
            />
          </svg>
        </div>
      </div>

      <h1 className="relative z-10">{children}</h1>
    </button>
  );
};

export default Button;
