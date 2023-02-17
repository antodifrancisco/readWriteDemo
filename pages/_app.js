import { ThirdwebProvider } from "@thirdweb-dev/react";
import { ArbitrumNova } from "@thirdweb-dev/chains";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider activeChain={ArbitrumNova}>
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
