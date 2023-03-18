import { createElement, FC, SVGProps } from 'react';
import { ReactComponent as TelegramIcon } from '../../assets/social/telegram.svg';
import { ReactComponent as TwitterIcon } from '../../assets/social/twitter.svg';
import { ReactComponent as InstagramIcon } from '../../assets/social/instagram.svg';

type IconType = FC<SVGProps<SVGSVGElement>>;

type SocialType = {
  to: string;
  icon: IconType;
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

export const SocialMedia: FC = () => (
  <nav className={'flex gap-4'}>
    {links.map(link => (
      <a
        key={link.to}
        className={
          'flex items-center justify-center text-white bg-blue rounded-full p-2 hover:saturate-150 duration-300 '
        }
        href={link.to}>
        {createElement(link.icon)}
      </a>
    ))}
  </nav>
);
