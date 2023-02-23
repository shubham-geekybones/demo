import Head from 'next/head';
import { Footer, Navbar } from '../components';
import Layout from '../components/layout';

import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => (
  <>
  <Layout>
    <Head>
      <title>Siddhi</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
      <Component {...pageProps} />
    </Layout>
  </>
);

export default MyApp;
