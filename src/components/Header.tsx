import { FC, MouseEventHandler, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Logo } from './Logo';
import { SocialMedia } from './SocialMedia';
import { LanguageToggle } from './LanguageToggle';
import { useMatchMedia } from '../hooks/useMatchMedia';
import { Modal } from './Modal';
import { Button } from './Button';

type NavigationProps = {
  closeModal?: () => void;
};

const Navigation: FC<NavigationProps> = ({ closeModal }) => {
  const { t } = useTranslation();

  const handleClick: MouseEventHandler<HTMLAnchorElement> = e => {
    e.preventDefault();
    const id = e.currentTarget.getAttribute('href');
    const anchor = id ? document.querySelector(id) : null;

    if (anchor) {
      anchor.scrollIntoView({
        behavior: 'smooth',
      });
    }

    if (typeof closeModal === 'function') {
      closeModal();
    }
  };

  return (
    <nav
      className={
        'flex sm:flex-col gap-8 lg:gap-4 md:gap-3 sm:gap-1 md:text-sm'
      }>
      <a
        className={'p-1 sm:border-b border-gray text-center'}
        href={'#about-us'}
        onClick={handleClick}>
        {t('about-us')}
      </a>
      <a
        className={'p-1 sm:border-b border-gray text-center'}
        href={'#working-time'}
        onClick={handleClick}>
        {t('how-we-work')}
      </a>
      <a
        className={'p-1 sm:border-b border-gray text-center'}
        href={'#feedback'}
        onClick={handleClick}>
        {t('feedback')}
      </a>
    </nav>
  );
};

type ModalButtonProps = {
  setOpenMenu: MouseEventHandler<HTMLButtonElement>;
};

const ModalButton: FC<ModalButtonProps> = ({ setOpenMenu }) => (
  <Button className={'w-10 text-black'} onClick={setOpenMenu}>
    <svg viewBox={'0 0 20 20'} fill={'currentColor'}>
      <path
        fillRule={'evenodd'}
        d={
          'M2 5a1 1 0 0 1 1-1h14a1 1 0 0 1 0 2H3a1 1 0 0 1-1-1zm0 5a1 1 0 0 1 1-1h14a1 1 0 0 1 0 2H3a1 1 0 0 1-1-1zm0 5a1 1 0 0 1 1-1h14a1 1 0 0 1 0 2H3a1 1 0 0 1-1-1z'
        }
        clipRule={'evenodd'}
      />
    </svg>
  </Button>
);

export const Header: FC = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const { isDesktop, isMobile } = useMatchMedia();

  return (
    <div
      className={
        'sm:fixed sm:top-0 sm:left-0 sm:w-screen sm:bg-white sm:bg-opacity-50 z-20 px-4 flex items-center justify-between pt-2 md:pt-1'
      }>
      <div
        className={
          'w-full flex gap-32 lg:gap-12 md:gap-4 items-center sm:justify-between'
        }>
        <Logo color={'blue'} className={'self-center sm:max-h-16'} />
        {isMobile ? (
          <>
            <ModalButton setOpenMenu={() => setOpenMenu(true)} />
            <Modal
              isOpen={openMenu}
              position={'right'}
              className={'w-full bg-white right-0'}
              backgroundColor={'rgba(255,255,255, 0.7)'}
              setClose={() => setOpenMenu(false)}>
              <div
                className={
                  'flex justify-between mr-10 py-3 p-3 gap-4 border-blue rounded-bl-md'
                }>
                <Navigation closeModal={() => setOpenMenu(false)} />
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
