import { Icon } from '@components/shared';

interface Props {
  size?: number;
}

export default function Brand({ size = 32 }: Props) {
  return (
    <div className='flex flex-row items-center justify-start gap-2'>
      <Icon
        name='logo'
        alt='Logo Icon'
        size={size}
      />
      <p
        className='font-bold'
        style={{ fontSize: size - 8 }}
      >
        Notes
      </p>
    </div>
  );
}
