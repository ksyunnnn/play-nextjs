import '../styles/globals.css';
import { AppProps } from 'next/app';

import Link from 'next/link';
import ContextProvider from '../components/ContextProvider';

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
        </div>
      </footer>
    </ContextProvider>
  );
};

export default App;
