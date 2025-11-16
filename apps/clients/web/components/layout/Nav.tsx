'use client';

import { Icon } from '@components/shared';
import { useTrigger } from '@library/hooks';
import { NavStyles } from '@styles/layout';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function Nav({ children }: Props) {
  const { trigger, pullTrigger } = useTrigger();

  return (
    <nav className='grow h-full flex flex-row items-center justify-end z-999999'>
      <div className={NavStyles.Large}>{children}</div>
      <div className={NavStyles.Small}>
        <div
          className={NavStyles.Head}
          onClick={pullTrigger}
        >
          <Icon
            className={trigger ? NavStyles.IconBefore : NavStyles.IconAfter}
            name='chevron'
            alt='Chevron icon'
            size={16}
          />
        </div>
        {trigger && <div className={NavStyles.Body}>{children}</div>}
      </div>
    </nav>
  );
}
