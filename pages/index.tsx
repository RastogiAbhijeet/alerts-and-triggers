import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  
  const throwError = () => {
    throw new Error("Making a mess")
  }

  return (
    <div className="xl:flex text-center p-12 ">
      <Head>
        <title>Alerts and Triggers</title>
        <meta name="description" content="You broke the deployment" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <h1 className="bold">E-A-S-Y-P-E-E-ZY!</h1>
        <button onClick={throwError}>Make a mess</button>
        <p>Hey : {process.env.NEXT_PUBLIC_SENTRY_ENABLED} </p>
      </main>
    </div>
  );
};

export default Home;
