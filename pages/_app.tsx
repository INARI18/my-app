import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from '../components/layout/layout';
import '../i18n';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
