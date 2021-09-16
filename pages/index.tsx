import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div className="p-12 bg-red-200 h-screen w-screen">
      <Head>
        <title>Alerts and Triggers</title>
        <meta name="description" content="You broke the deployment" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="shadow-xl p-10 bg-gray-100 rounded-lg">
        <p className="text-4xl font-bold pb-2">MUST BE RUST</p>
        <p className="text-lg fond-semibold">Alerts and triggers integration</p>
      </main>
    </div>
  );
};

export default Home;
