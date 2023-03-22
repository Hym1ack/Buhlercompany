import { FC } from 'react';

type LogoProps = {
  color: 'white' | 'blue';
  className?: string;
};

export const Logo: FC<LogoProps> = ({ color, className }) => (
  <div className={`inline-flex flex-col items-center ${className || ''}`}>
    <svg
      width={'100'}
      height={'67'}
      viewBox={'0 0 100 67'}
      xmlns={'http://www.w3.org/2000/svg'}>
      <path
        fillRule={'evenodd'}
        clipRule={'evenodd'}
        d={
          'M50.5095 52.4858V29.7615L61.8632 25.2166V41.0503L68.9956 38.1182V22.4311L80.0582 17.7396V35.0394L83.4061 36.5055V14.3676L48.7627 0L14.4105 14.3676V47.7943C20.0873 50.3355 35.2547 54.8315 50.5095 52.4858ZM58.952 22.7243L48.7627 27.1225L20.8151 15.2473L30.8588 11.1422L58.952 22.7243ZM77.0015 15.3939L67.8312 19.3523L39.4469 7.62363L48.7627 3.81182L77.0015 15.3939Z'
        }
        fill={color === 'blue' ? '#2D3D8A' : '#ffffff'}
      />
      <path
        d={
          'M80.0582 44.8621L77.0015 37.5317L100 45.302L89.2285 67L86.3173 60.1094C67.2489 67 23.2897 73.3042 0 43.3961C11.7419 52.9256 44.1921 66.5602 80.0582 44.8621Z'
        }
        fill={color === 'blue' ? '#5A6FD7' : '#ffffff'}
      />
    </svg>
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
