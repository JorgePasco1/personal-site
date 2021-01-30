import '../styles/globals.scss';
import 'semantic-ui-css/semantic.min.css';
import '../styles/shared.scss';
import '../styles/animations.scss';
import { AppProps } from 'next/app';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default MyApp;
