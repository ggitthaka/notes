import { ReactNode } from 'react';

export interface Props {
  className?: string;
  children: {
    brand: ReactNode;
    nav: ReactNode;
  };
}

export default function Header({ className, children }: Props) {
  return (
    <header
      className={`h-16 flex flex-row items-center justify-start ${className}`}
    >
      {children.brand}
      {children.nav}
    </header>
  );
}
