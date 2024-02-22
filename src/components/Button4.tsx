import { FunctionComponent, ReactNode } from 'react';
import { cn } from '../utils';

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  children: ReactNode;
  className?: string;
  stretchOnMobile?: boolean;
  removeOnMobile?: boolean;
  align?: boolean;
}

export const Button4: FunctionComponent<ButtonProps> = ({
  children,
  className,
  stretchOnMobile,
  removeOnMobile,
  align,
  ...props
}) => {
  return (
    <button
      className={cn(
        'w-44 py-4 relative flex items-center justify-center font-primary text-center rounded-sm hover:bg-grn transition-all ease-in-out duration-300 text-secondary group',
        className,
        align ? 'm-auto' : null,
      )}
      {...props}
    >
      {/* <svg
        width="280"
        height="36"
        viewBox="0 0 280 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn('w-full h-full absolute top-0 left-0 hidden', {
          'md:hidden block': stretchOnMobile,
        })}
      >
        <path
          d="M1.48997 18L20.2671 1H259.733L278.51 18L259.733 35H20.2671L1.48997 18Z"
          stroke="#F0F0F0"
          strokeWidth="2"
        />
      </svg>

      <div className="w-full h-full absolute top-0 left-0 px-[5px] sm:group-hover:opacity-100 duration-300 scale-y-50 scale-y-100">
        <svg
          width="280"
          height="36"
          viewBox="0 0 280 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={cn('w-full h-full absolute top-0 left-0 hidden', {
            'md:hidden block': stretchOnMobile,
          })}
        >
          <path d="M16.625 0H263.375L280 18L263.375 36H16.625L0 18L16.625 0Z" fill="#B38539" />
        </svg>
      </div> */}

      <svg
        width="169"
        height="36"
        viewBox="0 0 169 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn('absolute top-0 left-0 w-full h-full block group-hover:hidden', {
          'md:block hidden': stretchOnMobile,
        })}
      >
        <path d="M10.0344 0H158.966L169 18L158.966 36H10.0344L0 18L10.0344 0Z" fill="#B38539" />
      </svg>
      <div className="w-full h-full absolute top-0 left-0 transition-all ease-in-out opacity-0 sm:group-hover:opacity-100 duration-300 scale-y-50 sm:scale-y-100">
        <svg
          width="169"
          height="45"
          viewBox="0 0 169 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={cn('absolute top-0 left-0 w-full h-full block', {
            'md:block hidden': stretchOnMobile || removeOnMobile,
          })}
        >
          <path
            d="M1.20185 18L12.5352 1H156.465L167.798 18L156.465 35H12.5352L1.20185 18Z"
            stroke="#F0F0F0"
            strokeWidth="2"
          />
        </svg>
      </div>

      <h1 className="relative z-10">{children}</h1>
    </button>
  );
};

export default Button4;
