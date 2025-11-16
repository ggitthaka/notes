import { Header, HeaderProps, Main } from '@components/layout';
import { PageStyles } from '@styles/page';

interface Props {
  children: {
    header: HeaderProps;
  };
}

export default function Page({ children }: Props) {
  return (
    <body
      className={`min-h-screen flex gap-16 flex-col items-start justify-start overflow-x-hidden overflow-y-auto ${PageStyles.Page}`}
    >
      <Header
        className={PageStyles.Header}
        children={children.header.children}
      />
      <Main className={PageStyles.Main} />
    </body>
  );
}
