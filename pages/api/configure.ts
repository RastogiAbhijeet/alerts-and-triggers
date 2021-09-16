import { IntegrationConfiguration } from 'lib/db/integration-configuration'
import { TelegramService } from 'lib/services/telegram'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  id:string;
  configurationId:string;
  telegramChatId:string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  
  if(req.method === "POST") {
    const {telegramChatId, configurationId} = req.body
    const dbRes = await IntegrationConfiguration.insertConfiguration(configurationId, telegramChatId)

    const messageResponse = TelegramService.sendMessage("Integration with shield vercel integration completed.", configurationId)

    res.json(dbRes)
  }else{
    res.status(400)
  }

  return
}
