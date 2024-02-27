import { FunctionComponent, ReactNode } from 'react';
import { cn } from '../utils';

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  children: ReactNode;
  className?: string;
  stretchOnMobile?: boolean;
  removeOnMobile?: boolean;
  onClicked?: any;
}

export const Button3: FunctionComponent<ButtonProps> = ({
  children,
  className,
  stretchOnMobile,
  onClicked,
  ...props
}) => {
  const handleClick = () => {
    onClicked(true);
  };
  return (
    <button
      className={cn(
        'w-44 relative flex items-center justify-center font-primary text-center rounded-sm hover:bg-grn transition-all ease-in-out duration-300 text-secondary group py-4 sm:hover:text-primary',
        className,
      )}
      onClick={handleClick}
      {...props}
    >
      {/* <div
        className={cn(
          'w-full h-[calc(50%-0.48rem)] top-2 bg-primary absolute clip-top opacity-0 transition-ll ease-in-out duration-500 sm:group-hover:opacity-100 sm:group-hover:scale-y-[0.1] origin-top',
        )}
      ></div>
      <div
        className={cn(
          'w-full h-[calc(50%-0.48rem)] bottom-2 bg-primary absolute  clip-bottom opacity-0 transition-all ease-in-out duration-500 sm:group-hover:opacity-100  sm:group-hover:scale-y-[0.1] origin-bottom',
        )}
      ></div> */}
      <div className="sm:group-hover:opacity-0 hover:border- opacity-100 transition-all duration-500">
        <div className="sm:group-hover:opacity-0 opacity-100 transition-all duration-500">
          <div className="w-full h-full absolute top-0 left-0 transition-all ease-in-out">
            <svg
              width="161"
              height="28"
              viewBox="0 0 161 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={cn('absolute top-0 left-0 w-full h-full block scale-x-[0.957]', {
                'md:block hidden': stretchOnMobile,
              })}
            >
              <path d="M10 0H151L160.5 14L151 28H10L0.5 14L10 0Z" fill="#B38539" />
            </svg>
          </div>
        </div>
      </div>

      <h1 className="relative z-10">{children}</h1>
    </button>
  );
};

export default Button3;
