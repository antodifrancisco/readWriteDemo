import { useAddress, useMetamask } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import { useContract, useContractWrite } from "@thirdweb-dev/react";
import { useState } from "react";

export default function Home() {
  const [walletError, setWalletError] = useState(null);
  const address = useAddress();
  const connectWithMetamask = useMetamask();
  const { contract } = useContract(
    "0xCe79c48Ecad7521099F12408B42E2Dfcb0a25c46"
  );
  const { mutateAsync: myFunctionAsync } = useContractWrite(
    contract,
    "updateTokenListInfo"
  );

  const handleConnect = async () => {
    const data = await connectWithMetamask();
    if (data.error) {
      setWalletError(data.error);
    } else {
      console.log(address);
    }
  };

  const writeData = async () => {
    const tx = await myFunctionAsync(
      [0, 1, 2],
      ["abc", "abc", "abc"],
      ["abc", "abc", "abc"],
      ["abc", "abc", "abc"],
      ["abc", "abc", "abc"],
      ["abc", "abc", "abc"]
    );

    console.log("TX: ", tx);
  };

  const readData = async () => {
    const tokenID = 10;
    const returnedData = await fetch("/api/readToken", {
      method: "POST",
      body: JSON.stringify({ data: tokenID }),
    });
    const response = await returnedData.json();
    console.log(response);
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://thirdweb.com/">thirdweb</a>!
        </h1>

        <div className={styles.grid}>
          <div className={styles.card}>
            <button onClick={handleConnect}>Write</button>
            <p>Connect wallet</p>
          </div>

          <div className={styles.card}>
            <button onClick={writeData}>Write</button>
            <p>Write predetermined strings into the smart contract</p>
          </div>

          <div className={styles.card}>
            <button onClick={readData}>Read</button>
            <p>Read the data previously written</p>
          </div>
        </div>
      </main>
    </div>
  );
}
