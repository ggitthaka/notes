import { Container, Footer } from '@components/layout';

interface Props {
  className: string;
}

export default function Main({ className }: Props) {
  return (
    <main
      className={`grow flex flex-col items-start justify-start gap-16 ${className}`}
    >
      <Container />
      <Footer />
    </main>
  );
}
