import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import chooseUsImg from '../assets/chooseUs.png';
import spec1 from '../assets/service/guarantee.png';
import spec2 from '../assets/service/anyCargo.png';
import spec3 from '../assets/service/insurance.png';
import { useMatchMedia } from '../hooks/useMatchMedia';

type SpecItems = {
  icon: string;
  title: string;
  text: string;
};

const SpecItem: FC<SpecItems> = ({ icon, text, title }) => (
  <div className={'grid grid-cols-6 gap-4 max-w-[350px]'}>
    <img
      className={'col-span-1 row-span-2 w-16 h-fit mr-4'}
      src={icon}
      alt={text}
    />
    <p className={'col-span-5 text-xl leading-6 font-medium'}>{title}</p>
    <p className={'col-span-5 font-light text-light leading-[19px]'}>{text}</p>
  </div>
);

export const ChooseUs: FC = () => {
  const { t } = useTranslation();
  const { isMobile } = useMatchMedia();

  const specItems: SpecItems[] = [
    {
      icon: spec1,
      title: t('choose.spec-1.title'),
      text: t('choose.spec-1.text'),
    },
    {
      icon: spec2,
      title: t('choose.spec-2.title'),
      text: t('choose.spec-2.text'),
    },
    {
      icon: spec3,
      title: t('choose.spec-3.title'),
      text: t('choose.spec-3.text'),
    },
  ];

  return (
    <>
      <div
        className={
          'ml-[130px] xl:ml-12 lg:ml-0 flex flex-col mb-40 lg:mb-20 md:mb-10 sm:mb-5'
        }>
        <h4
          className={'text-3xl md:text-center font-medium text-gray mb-8'}
          dangerouslySetInnerHTML={{ __html: t('choose.title') }}
        />
        <div className={'flex md:flex-wrap justify-between'}>
          <p
            className={
              'w-1/2 md:w-full text-light font-light leading-[19px] whitespace-pre-line'
            }
            dangerouslySetInnerHTML={{ __html: t('choose.text') }}
          />

          {!isMobile && (
            <div
              className={
                'relative w-1/2 md:w-full h-full max-w-[503px] min-w-[240px] sm:hidden'
              }>
              <img
                className={
                  'absolute md:max-h-[350px] -top-32 md:top-0 md:-right-64 right-0'
                }
                src={chooseUsImg}
                alt={'choose us'}
              />
            </div>
          )}
        </div>
      </div>
      <div
        className={
          'flex items-start justify-between mb-24 lg:mb-16 md:mb-8 lg:flex-wrap lg:justify-center md:justify-start sm:justify-center lg:gap-x-24 lg:gap-y-10'
        }>
        {specItems.map(({ icon, title, text }) => (
          <SpecItem key={title} icon={icon} title={title} text={text} />
        ))}
      </div>
    </>
  );
};
