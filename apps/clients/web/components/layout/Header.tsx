interface Props {
  className: string;
}

export default function Header({ className }: Props) {
  return (
    <header
      className={`h-16 flex flex-row items-center justify-start ${className}`}
    ></header>
  );
}
