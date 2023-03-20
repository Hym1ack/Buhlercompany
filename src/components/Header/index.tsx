import { FC, MouseEventHandler, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Logo } from '../Logo';
import { SocialMedia } from '../SocialMedia';
import { LanguageToggle } from '../LanguageToggle';
import { useMatchMedia } from '../../hooks/useMatchMedia';
import { Modal } from '../Modal';

const Navigation = () => {
  const { t } = useTranslation();

  return (
    <nav className={'flex sm:flex-col gap-8 lg:gap-4 md:gap-3 md:text-sm'}>
      <a className={'p-1 border-b border-gray text-center'} href={'#about-us'}>
        {t('about-us')}
      </a>
      <a
        className={'p-1 border-b border-gray text-center'}
        href={'#working-time'}>
        {t('how-we-work')}
      </a>
      <a className={'p-1 border-b border-gray text-center'} href={'#feedback'}>
        {t('feedback')}
      </a>
    </nav>
  );
};

type ModalButtonProps = {
  setOpenMenu: MouseEventHandler<HTMLButtonElement>;
};

const ModalButton: FC<ModalButtonProps> = ({ setOpenMenu }) => (
  <button onClick={setOpenMenu}>
    <svg viewBox={'0 0 20 20'} width={'20'} height={'20'} fill={'currentColor'}>
      <path
        fillRule={'evenodd'}
        d={
          'M2 5a1 1 0 0 1 1-1h14a1 1 0 0 1 0 2H3a1 1 0 0 1-1-1zm0 5a1 1 0 0 1 1-1h14a1 1 0 0 1 0 2H3a1 1 0 0 1-1-1zm0 5a1 1 0 0 1 1-1h14a1 1 0 0 1 0 2H3a1 1 0 0 1-1-1z'
        }
        clipRule={'evenodd'}
      />
    </svg>
  </button>
);

export const Header: FC = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const { isDesktop, isMobile } = useMatchMedia();

  return (
    <div className={'flex items-center justify-between '}>
      <div
        className={
          'w-full flex gap-32 lg:gap-12 md:gap-4 items-center sm:justify-between'
        }>
        <Logo color={'blue'} className={'self-center'} />
        {isMobile ? (
          <>
            <ModalButton setOpenMenu={() => setOpenMenu(true)} />
            <Modal
              isOpen={openMenu}
              position={'right'}
              className={'bg-white right-0'}
              backgroundColor={'rgba(255,255,255, 0.7)'}
              setClose={() => setOpenMenu(false)}>
              <div
                className={
                  'flex flex-col pt-10 p-3 gap-4 items-end border-blue rounded-bl-md'
                }>
                <Navigation />
                <LanguageToggle />
              </div>
            </Modal>
          </>
        ) : (
          <Navigation />
        )}
      </div>
      {!isMobile && (
        <div className={'flex gap-16 lg:gap-6'}>
          {isDesktop && <SocialMedia />}
          <LanguageToggle />
        </div>
      )}
    </div>
  );
};
