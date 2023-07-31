import '@/styles/globals.css'
import { Provider } from 'react-redux';
import {store} from "@/store/index";
import Layout from "@/components/layout";
import ReactGA from "react-ga4";
import {GOOGLE_ANAL} from "@/config";
export default function App({ Component, pageProps }) {
  ReactGA.initialize(GOOGLE_ANAL);
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}
