import '../styles/globals.css';
import { AppProps } from 'next/app';
import { Provider as SessionProvider } from 'next-auth/client';
import Head from 'next/head';
import ContextProvider from '../context/Provider';

import 'tailwindcss/tailwind.css';

const App = ({ Component, pageProps, router }: AppProps) => (
  <SessionProvider session={pageProps.session}>
    <ContextProvider>
      <Head>
        <title>App</title>
        <meta name="description" content="App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </ContextProvider>
  </SessionProvider>
);

export default App;
