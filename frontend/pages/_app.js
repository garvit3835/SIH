import Provider from "@/components/Provider";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return <Provider>{getLayout(<Component {...pageProps} />)}</Provider>;
}
