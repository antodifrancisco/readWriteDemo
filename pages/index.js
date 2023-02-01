import { ConnectWallet } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const writeData = async () => {
    const data = {
      _tokenID: 10,
      _firstLink: "abc",
      _secondLink: "abc",
      _thirdLink: "abc",
      _fourthLink: "abc",
    };

    const returnedData = await fetch("/api/writeToken", {
      method: "POST",
      body: JSON.stringify(data),
    });

    const response = await returnedData.json();
    console.log(response);
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
