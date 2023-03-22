import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { ModalForm } from './ModalForm';

export const BecomeUs: FC = () => {
  const { t } = useTranslation();

  return (
    <div
      className={
        'bg-lapis rounded-[20px] lg:rounded-xl p-11 lg:p-8 sm:p-3 flex items-center gap-2 sm:flex-wrap sm:justify-center sm:gap-4 justify-between'
      }>
      <h6
        className={
          'text-white text-3xl lg:text-center sm:text-xl lg:text-2xl font-semibold'
        }>
        {t('become-us.promo')}
      </h6>
      <ModalForm
        type={'become'}
        buttonStyles={
          'text-blue bg-white sm:p-3 hover:bg-blue hover:text-white'
        }
      />
    </div>
  );
};
