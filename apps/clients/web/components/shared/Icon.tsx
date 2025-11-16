'use client';

import Image from 'next/image';
import { useIcon } from '@library/hooks';

export interface Props {
  name: string;
  alt: string;
  size?: number;
  custom?: { width: number; height: number };
  inverted?: boolean;
  className?: string;
}

export default function Icon({
  name,
  alt,
  size,
  inverted,
  custom,
  className,
}: Props) {
  const { icon } = useIcon();

  return (
    <Image
      src={`/icons/${
        inverted ? (icon == 'dark' ? 'light' : 'dark') : icon
      }/${name}.svg`}
      alt={alt}
      width={custom ? custom.width : size}
      height={custom ? custom.height : size}
      className={className}
    />
  );
}
