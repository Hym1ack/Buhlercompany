import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import workingImage from '../assets/workingTime.png';
import { ModalForm } from './ModalForm';

export const WorkingTime: FC = () => {
  const { t } = useTranslation();

  const stages = [
    {
      title: t('working.stage-1.title'),
      text: t('working.stage-1.text'),
    },
    {
      title: t('working.stage-2.title'),
      text: t('working.stage-2.text'),
    },
    {
      title: t('working.stage-3.title'),
      text: t('working.stage-3.text'),
    },
    {
      title: t('working.stage-4.title'),
      text: t('working.stage-4.text'),
    },
  ];

  return (
    <div
      id={'working-time'}
      className={'w-screen bg-blue py-24 md:py-16 sm:py-12'}>
      <div className={'container'}>
        <div className={'flex lg:flex-row-reverse justify-between'}>
          <div className={'relative w-[792px] sm:hidden'}>
            <img
              className={
                'absolute min-w-[764px] lg:min-w-[450px] lg:-left-0 -left-96 top-12 lg:-top-24 z-10'
              }
              src={workingImage}
              alt={'working time'}
            />
            <span
              className={
                'absolute -left-96 lg:-left-0 -top-1 lg:-top-24 w-[792px] lg:w-[465px] h-[792px] lg:h-[465px] bg-lapis rounded-full'
              }
            />
          </div>
          <div className={'max-w-[670px] w-full'}>
            <h2
              className={
                'text-3xl md:text-center mb-24 md:mb-16 sm:mb-8 text-white'
              }>
              {t('working.title')}
            </h2>
            <div
              className={
                'mb-8  flex flex-col gap-12 text-white number-divider'
              }>
              {stages.map((stage, index) => (
                <div key={stage.title} className={'flex'}>
                  <p
                    className={
                      'min-w-[3rem] h-12 rounded-full bg-lapis text-2xl leading-[3rem] text-center font-semibold z-10'
                    }>
                    {index + 1}
                  </p>
                  <div className={'ml-7'}>
                    <h5 className={'font-medium text-xl'}>{stage.title}</h5>
                    <p className={'font-light text-lightgray'}>{stage.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div
              className={'flex gap-12 md:gap-6 sm:justify-center sm:flex-wrap'}>
              <ModalForm
                type={'request'}
                buttonStyles={
                  'text-blue  bg-white border border-white hover:bg-blue hover:text-white'
                }
              />
              <ModalForm
                type={'become'}
                buttonStyles={
                  'text-white bg-blue border border-white hover:bg-white hover:text-blue'
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
