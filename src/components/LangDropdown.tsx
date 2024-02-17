import { SA, US } from 'country-flag-icons/react/3x2';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { IoIosArrowDown } from 'react-icons/io';
import { cn } from '../utils';

const LangDropdown = ({ setActive, active }: { setActive: (value: boolean) => void; active: boolean }) => {
  const { i18n } = useTranslation();

  const langData = [
    {
      title: 'Eng',
      code: 'en',
      icon: US,
    },
    {
      title: 'Arb',
      code: 'ar',
      icon: SA,
    },
  ];

  return (
    <>
      <button
        className={cn('text-secondary font-primary items-center gap-1 text-xl md:flex hidden', {
          'pointer-events-none': active,
        })}
        onClick={() => setActive(true)}
      >
        {langData.map((item) => (
          <React.Fragment key={item.code}>
            {i18n.language === item.code && (
              <>
                <item.icon className="w-5" />
                <h1 className="text-lg capitalize">{item.title}</h1>
              </>
            )}
          </React.Fragment>
        ))}
        <IoIosArrowDown className="text-xl" />
      </button>
    </>
  );
};

export default LangDropdown;
