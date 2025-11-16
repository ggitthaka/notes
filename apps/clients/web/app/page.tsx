import { Page } from '@components/page';
import { Brand } from '@components/shared';
import { Nav } from '@components/layout';

export default function Landing() {
  return (
    <Page
      children={{
        header: {
          children: {
            brand: <Brand />,
            nav: <Nav children={null} />,
          },
        },
      }}
    />
  );
}
