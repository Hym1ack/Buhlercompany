import { FC } from 'react';

import { ReactComponent as AppLogo } from '../assets/logo.svg';

type LogoProps = {
  color: 'white' | 'blue';
  className?: string;
};

export const Logo: FC<LogoProps> = ({ color, className }) => (
  <div className={`inline-flex flex-col items-center ${className || ''}`}>
    <AppLogo
      className={`mb-1 md:mb-0 ${
        color === 'white' ? 'bg-[#ffffff]' : ''
      } lg:w-20 lg:h-20 md:w-12 md:h-12`}
    />
    <h6
      className={
        'text-[18px] md:text-xs  leading-[22px] md:leading-[16px] font-bold uppercase color'
      }>
      Buhlercompany
    </h6>
    <span className={'text-[10px] md:text-[7px] leading-[12px] uppercase'}>
      Buhlercompany is the People
    </span>
  </div>
);
