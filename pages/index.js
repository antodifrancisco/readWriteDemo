//import { useAddress, useMetamask } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import dynamic from "next/dynamic";

const DelegateCashButton = dynamic(() => import("delegatecash-button-react"), {
  ssr: false,
});

export default function Home() {
  //const [walletError, setWalletError] = useState(null);
  //const address = useAddress();
  //const connectWithMetamask = useMetamask();

  // const handleConnect = async () => {
  //   const data = await connectWithMetamask();
  //   if (data.error) {
  //     setWalletError(data.error);
  //   } else {
  //     console.log(address);
  //   }
  // };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Delegate.Cash test</h1>

        <div className={styles.grid}>
          {/* <div className={styles.card}>
            <button onClick={handleConnect}>Connect wallet</button>
            <p>Connect wallet</p>
          </div> */}

          <div className={styles.card}>
            <p>Connect with Delegate.Cash</p>
            <DelegateCashButton
              connectedWallet="0x0000000000000000000000000000000000000001"
              rpcUrl="https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161"
              rounded={true}
              onButtonClick={(event) => console.log(event.detail)}
              onWalletSelect={(event) => console.log(event.detail)}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
