import '../styles/globals.css';
import { AppProps } from 'next/app';

import Link from 'next/link';
import ContextProvider from '../context/Provider';

const App = ({ Component, pageProps, router }: AppProps) => {
  console.log({ pageProps, router });

  return (
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
  );
};

export default App;
