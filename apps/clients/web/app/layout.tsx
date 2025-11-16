import '../styles/globals.css';
import { Funnel_Display } from 'next/font/google';

const funnelDisplay = Funnel_Display();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      data-theme='system'
      className={funnelDisplay.className}
    >
      {children}
    </html>
  );
}
