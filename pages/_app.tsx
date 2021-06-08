import '../styles/globals.css';
import { AppProps } from 'next/app';

import Link from 'next/link';
import { Provider as SessionProvider } from 'next-auth/client';
import ContextProvider from '../context/Provider';

const App = ({ Component, pageProps, router }: AppProps) => {
  console.log({ pageProps, router });
  return (
    <SessionProvider session={pageProps.session}>
      <ContextProvider>
        <Component {...pageProps} />
        <footer>
          共通のフッター
          <div>
            <Link href="/">home</Link>
            /
            <Link href="/post">post</Link>
            /
            <Link href="/profile">Profile</Link>
          </div>
        </footer>
      </ContextProvider>
    </SessionProvider>
  );
};

export default App;
