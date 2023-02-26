import Head from 'next/head';
import Layout from '../components/layout';
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Siddhi</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Layout>
      <ToastContainer />
      <Component {...pageProps} />
    </Layout>
  </>
);

export default MyApp;
