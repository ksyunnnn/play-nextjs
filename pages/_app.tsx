import '../styles/globals.css';
import { AppProps } from 'next/app';

const App = ({ Component, pageProps, router }: AppProps) => {
  console.log({ pageProps, router });
  return <Component {...pageProps} />;
};

export default App;
