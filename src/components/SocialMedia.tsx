import { createElement, FC, SVGProps } from 'react';
import { ReactComponent as TelegramIcon } from '../assets/social/telegram.svg';
import { ReactComponent as TwitterIcon } from '../assets/social/twitter.svg';
import { ReactComponent as InstagramIcon } from '../assets/social/instagram.svg';

type IconType = FC<SVGProps<SVGSVGElement>>;

type SocialType = {
  to: string;
  icon: IconType;
};

type SocialMediaProps = {
  className?: string;
};

const links: SocialType[] = [
  {
    to: '/telegramLink',
    icon: TelegramIcon,
  },
  {
    to: '/twitter',
    icon: TwitterIcon,
  },
  {
    to: '/instagram',
    icon: InstagramIcon,
  },
];

export const SocialMedia: FC<SocialMediaProps> = ({ className }) => (
  <nav className={'flex sm:flex-col items-center gap-4 lg:gap-2'}>
    {links.map(link => (
      <a
        key={link.to}
        className={`${className || ''} social-media`}
        href={link.to}>
        {createElement(link.icon)}
      </a>
    ))}
  </nav>
);
