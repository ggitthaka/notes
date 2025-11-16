import { Header, Main } from '@components/layout';
import { PageStyles } from '@styles/page';

export default function Page() {
  return (
    <body
      className={`min-h-screen flex gap-16 flex-col items-start justify-start overflow-x-hidden overflow-y-auto ${PageStyles.Page}`}
    >
      <Header className={PageStyles.Header} />
      <Main className={PageStyles.Main} />
    </body>
  );
}
