import "../styles/globals.css";
import Head from "next/head";
import CartProvider from "../cardContext";

function App({ Component, pageProps }) {
  return (
    <CartProvider>
      <main>
        <Head>
          <link
            rel="icon"
            href="/favicon.ico"
            type="image/<generated>"
            sizes="any"
          />
          <title>Dream2Car</title>
        </Head>
        <Component {...pageProps} />
      </main>
    </CartProvider>
  );
}

export default App;
