import { FC, MouseEventHandler, ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
  className?: string;
};

export const Button: FC<ButtonProps> = ({ children, onClick, className }) => (
  <button className={`${className || ''}  base-button`} onClick={onClick}>
    {children}
  </button>
);
