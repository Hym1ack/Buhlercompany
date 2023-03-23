import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import transport from '../assets/service/transport.png';
import transfer from '../assets/service/transfer.png';
import storage from '../assets/service/storage.png';

export const BestService: FC = () => {
  const { t } = useTranslation();

  const serviceList = [
    {
      img: transport,
      title: t('service.feature-title-1'),
      text: t('service.feature-text-1'),
    },
    {
      img: storage,
      title: t('service.feature-title-2'),
      text: t('service.feature-text-2'),
    },
    {
      img: transfer,
      title: t('service.feature-title-3'),
      text: t('service.feature-text-3'),
    },
  ];

  return (
    <div className={'mb-28'}>
      <h3
        className={
          'mb-14 text-center text-gray text-2xl font-medium sm:text-xl sm:mb-4'
        }
        dangerouslySetInnerHTML={{ __html: t('service.title') }}
      />
      <div className={'flex md:flex-col md:items-center justify-center gap-4'}>
        {serviceList.map(service => (
          <div
            key={service.title}
            className={
              'relative max-w-[393px] grid grid-cols-6 p-7 xl:p-3 bg-white shadow rounded-xl overflow-hidden after:afterBlueLine'
            }>
            <img
              className={'col-span-1'}
              src={service.img}
              alt={service.title}
            />
            <h6 className={'ml-4 col-span-5 text-gray font-medium text-xl'}>
              {service.title}
            </h6>
            <p className={'col-span-6 text-light font-light'}>{service.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
