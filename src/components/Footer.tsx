import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { BecomeUs } from './BecomeUs';
import { Logo } from './Logo';
import { SocialMedia } from './SocialMedia';

const FooterContent: FC = () => {
  const { t } = useTranslation();

  return (
    <div
      className={
        'relative gap-2 lg:gap-x-1 lg:gap-y-4 pr-24 lg:pr-0 mt-24 lg:mt-12 md:mt-6 pb-24 lg:pb-12 flex lg:flex-wrap lg:text-center justify-between lg:justify-center'
      }>
      <Logo color={'white'} className={'text-white lg:w-full  sm:mr-auto'} />
      <ul className={'flex flex-col gap-2'}>
        <li className={'text-white font-bold mb-2'}>{t('footer.contacts')}</li>
        <a
          className={'text-lightgray font-light'}
          href={'mailto:hym1ack322@gmail.com'}>
          hym1ack322@gmail.com
        </a>
        <a
          className={'text-lightgray font-light'}
          href={'https://t.me/hym1ack322'}>
          tg:@hym1ack322
        </a>
        <a
          className={'text-lightgray font-light'}
          href={'https://goo.gl/maps/LzeSC98gmQyrxFwH9'}>
          Merseburger Str. 255, 04178 Leipzig
        </a>
      </ul>
      <ul className={'flex flex-col gap-2'}>
        <li className={'text-white font-bold mb-2'}>{t('footer.services')}</li>
        <li className={'text-lightgray font-light'}>
          {t('footer.cargo-transportation')}
        </li>
        <li className={'text-lightgray font-light'}>
          {t('footer.cargo-storage')}
        </li>
        <li className={'text-lightgray font-light'}>
          {t('footer.cargo-transfer')}
        </li>
      </ul>
      <ul className={'flex flex-col gap-2'}>
        <li className={'text-white font-bold mb-2'}>{t('footer.about-us')}</li>
        <li className={'text-lightgray font-light'}>
          {t('footer.legal-address')}
        </li>
        <li className={'text-lightgray font-light'}>
          62 Portland St, Yau Ma Tei, Hong Kong
        </li>
      </ul>
      <ul className={'absolute right-0'}>
        <SocialMedia className={'bg-lapis'} />
      </ul>
    </div>
  );
};

export const Footer: FC = () => (
  <div className={'w-screen relative bg-blue'}>
    <div className={'container absolute -top-16 left-0 right-0'}>
      <BecomeUs />
    </div>
    <div className={'container h-full pt-20'}>
      <FooterContent />
    </div>
  </div>
);
