import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { BestService } from '../BestService';

const MainInfo: FC = () => {
  const { t } = useTranslation();

  return (
    <div
      className={
        'mb-32 lg:mb-16 md:mb-8 sm:mb-4 max-w-[633px] xl:max-w-md  flex flex-col justify-between'
      }>
      <h1
        className={'mb-4 lg:mb-2 text-3xl xl:text-2xl md:text-xl font-medium'}>
        {t('hero-title')}
      </h1>
      <p className={'mb-8 md:mb-4 text-light whitespace-pre-line'}>
        {t('hero-text')}
      </p>
      <div className={'flex sm:justify-center gap-12 lg:gap-6 md:flex-wrap'}>
        <button
          className={
            'w-56 px-1 py-4  text-white bg-blue rounded-lg hover:bg-white hover:text-blue hover:border hover:border-blue duration-300'
          }>
          {t('hero-button-request')}
        </button>
        <button
          className={
            'w-56 px-1 py-4  text-blue border border-blue rounded-lg hover:bg-blue hover:text-white duration-300'
          }>
          {t('hero-button-join')}
        </button>
      </div>
    </div>
  );
};

const AboutUs: FC = () => {
  const { t } = useTranslation();

  const infoList = [
    {
      title: '160k',
      text: t('hero-delivered'),
    },
    {
      title: '25k',
      text: t('hero-clients'),
    },
    {
      title: '400',
      text: t('hero-workspaces'),
    },
  ];

  return (
    <div
      className={
        'flex sm:justify-center gap-7 sm:gap-2 mb-32 lg:mb-16 md:mb-8 sm:mb-4'
      }>
      {infoList.map(info => (
        <div
          key={info.title}
          className={'max-w-[149px] sm:max-w-none flex flex-col items-center'}>
          <h6 className={'text-blue text-2xl md:text-xl font-bold'}>
            {info.title}
          </h6>
          <p className={'font-medium md:text-sm leading-[19px]'}>{info.text}</p>
        </div>
      ))}
    </div>
  );
};

export const Hero: FC = () => (
  <>
    <MainInfo />
    <AboutUs />
    <BestService />
  </>
);
