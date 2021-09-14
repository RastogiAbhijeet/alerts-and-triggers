import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  
  const throwError = () => {
    throw new Error("Making a mess")
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Alerts and Triggers</title>
        <meta name="description" content="You broke the deployment" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>E-ASY-PEE-ZY!</h1>
        <button onClick={throwError}>Make a mess</button>
        <p>Hey : {process.env.NEXT_PUBLIC_SENTRY_ENABLED} </p>
      </main>
    </div>
  );
};

export default Home;
