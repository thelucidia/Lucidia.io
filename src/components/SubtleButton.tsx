import { FunctionComponent, ReactNode } from 'react';
import { cn } from '../utils';

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  children: ReactNode;
  className?: string;
  stretchOnMobile?: boolean;
}

export const SubtleButton: FunctionComponent<ButtonProps> = ({ children, className, stretchOnMobile, ...props }) => {
  return (
    <button
      className={cn(
        'w-44 py-4 relative font-primary text-center rounded-sm hover:bg-grn transition-all ease-in-out duration-300 text-secondary group sm:hover:text-primary',
        className,
      )}
      {...props}
    >
      <svg
        width="290"
        height="36"
        viewBox="0 0 290 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn('w-full h-full absolute top-0 left-0 hidden', {
          'md:hidden block': stretchOnMobile,
        })}
      >
        <path d="M20.5917 0H269.408L290 18L269.408 36H20.5917L0 18L20.5917 0Z" fill="#1E1E1E" />
      </svg>

      <svg
        width="289"
        height="36"
        viewBox="0 0 289 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn('w-full h-full absolute top-0 left-0 hidden sm:group-hover:opacity-100 opacity-0', {
          'md:hidden block': stretchOnMobile,
        })}
      >
        <path d="M0.758236 18L20.7089 0.5H268.291L288.242 18L268.291 35.5H20.7089L0.758236 18Z" stroke="#B28538" />
      </svg>

      <svg
        width="169"
        height="36"
        viewBox="0 0 169 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn(
          'absolute top-0 left-0 w-full h-full block sm:group-hover:opacity-0 opacity-100 transition-all ease-in-out duration-500',
          {
            'md:block hidden': stretchOnMobile,
          },
        )}
      >
        <path d="M12 0H157L169 18L157 36H12L0 18L12 0Z" fill="#1E1E1E" />
      </svg>

      <svg
        width="169"
        height="36"
        viewBox="0 0 169 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn(
          'absolute top-0 left-0 w-full h-full block opacity-0 sm:group-hover:opacity-100 transition-all ease-in-out duration-500',
          {
            'md:block hidden': stretchOnMobile,
          },
        )}
      >
        <path d="M0.600925 18L12.2676 0.5H156.732L168.399 18L156.732 35.5H12.2676L0.600925 18Z" stroke="#B28538" />
      </svg>

      <h1 className="relative z-10">{children}</h1>
    </button>
  );
};

export default SubtleButton;
