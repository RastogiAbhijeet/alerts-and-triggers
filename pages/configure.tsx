import axios from "axios";
import Layout from "components/layout";
import { submitTelegramChatId } from "lib/services/integration.service";
import { useRouter } from "next/router";
import { useState } from "react";

// The URL of this page should be added as Configuration URL in your integration settings on Vercel
export default function Configure() {
  const router = useRouter();

  const [telegramChatId, setTelegramChatId] = useState<string>();
  const [configurationSuccess, setConfigurationSuccess] = useState<boolean>()

  const handleChange = (event) => {
    setTelegramChatId(event.target.value);
  };

  const submitTGChatId = async (event) => {
    try{
      if (telegramChatId) {
        const req = {
          telegramChatId,
          configurationId: router.query.configurationId,
        };
        const res = await submitTelegramChatId(req);
        if(res){
          setConfigurationSuccess(true)
        }
      }
    }catch(err){
      setConfigurationSuccess(false)
    }
  };

  return (
    <Layout>
      <main className="shadow-xl p-8 mt-16 bg-gray-100 rounded-lg">
        <p className="text-4xl font-bold pb-2">Configure</p>
        <p className="text-xl font-bold pb-2">
          Configuration Id : <code>{router.query.configurationId}</code>
        </p>

        {configurationSuccess === true && <p>CONFIGURED.</p>}
        {configurationSuccess === false && <p>UNABLE TO CONFIGURE.</p>}

        <form className="box py-2" onSubmit={submitTGChatId}>
          <div>
            <code>Telegram Chat Id:</code>
          </div>
          <div>
            <input type="text" className="my-4 rounded-xl" onChange={handleChange}></input>
          </div>
          <div>
            <button className="shadow-md rounded-xl bg-red-300 py-2 px-4 text-white font-semibold">
              {" "}
              Configure
            </button>
          </div>
        </form>
      </main>
    </Layout>
  );
}
