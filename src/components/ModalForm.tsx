import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from './Button';
import { Modal } from './Modal';
import imageModal from '../assets/mainPhoto.png';

type ModalFormProps = {
  type: 'become' | 'request';
  buttonStyles: string;
};

export const ModalForm: FC<ModalFormProps> = ({ type, buttonStyles }) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const { t } = useTranslation();

  return (
    <>
      <Button className={buttonStyles} onClick={() => setOpenModal(true)}>
        {type === 'become' ? t('become-us.button') : t('service.button')}
      </Button>
      <Modal
        position={type === 'become' ? 'right' : 'left'}
        className={
          'flex justify-between gap-12 xl:gap-6 lg:gap-2 bg-white max-w-[1220px] xl:max-w-[90%] xl:overflow-hidden w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl'
        }
        backgroundColor={'rgba(55, 55, 55, 0.8)'}
        isOpen={openModal}
        setClose={() => setOpenModal(false)}>
        <div
          className={
            'w-full lg:w-1/2 md:w-full pt-12 pl-20 xl:pl-12 lg:pl-8 pb-15 xl:py-8 md:p-8 z-10'
          }>
          <h5
            className={'font-medium text-center text-gray text-3xl md:text-2xl'}
            dangerouslySetInnerHTML={{
              __html:
                type === 'become'
                  ? t('become-us.title')
                  : t('service.use-services'),
            }}
          />
          <p
            className={
              'pt-5 md:pt-2 font-light text-gray whitespace-nowrap md:whitespace-normal md:text-center'
            }>
            {t('become-us.descr')}
          </p>
          <div
            className={'mt-11 md:mt-4 sm:mt-2  flex flex-col gap-5 sm:gap-2'}>
            <input
              type={'text'}
              className={'base-input'}
              placeholder={t('become-us.input-name') || 'Name'}
            />
            <input
              type={'email'}
              className={'base-input'}
              placeholder={t('become-us.input-email') || 'Email'}
            />
            <textarea
              minLength={30}
              maxLength={255}
              className={'max-h-[155px] h-full'}
              placeholder={t('become-us.input-comment') || 'Your comment'}
            />
            <Button
              className={'w-full text-white bg-blue'}
              onClick={() => setOpenModal(false)}>
              {type === 'become' ? t('become-us.button') : t('service.button')}
            </Button>
          </div>
        </div>
        <img
          className={'max-w-[522px] md:hidden '}
          src={imageModal}
          alt={'become us'}
        />
      </Modal>
    </>
  );
};
