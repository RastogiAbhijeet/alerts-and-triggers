// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { IntegrationConfiguration } from 'lib/db/integration-configuration'
import { TelegramService } from 'lib/services/telegram'
import { supabaseClient } from 'lib/utils/supabase'
import type { NextApiRequest, NextApiResponse } from 'next'


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {

  const token = process.env.TELEGRAM_BOT_TOKEN
  const author = process.env.VERCEL_GIT_COMMIT_AUTHOR_LOGIN
  const branch = process.env.VERCEL_GIT_COMMIT_REF
  const commit = process.env.VERCEL_GIT_COMMIT_SHA
  const {telegramChatId} = await IntegrationConfiguration.getConfigurationById(req.body.configurationId)

  const {data, error } = await supabaseClient
      .from<any>("members")
      .insert({github_username: `${req.body.type}-${telegramChatId}-${req.body.configurationId}` , telegram_username: process.env.VERCEL_GIT_COMMIT_AUTHOR_LOGIN})

  if(error){
    console.log(error)
    res.status(400).json({ name: "SUPABASE ERROR" })
    return
  }

  await TelegramService.sendMessage(`VERCEL DEPLOYMENT STATUS: \
   \nAUTHOR: ${author} \
   \nBRANCH: ${branch} \
   \nCOMMIT: ${commit} \
   \nDEPLOYMENT STATUS: ${req.body.type} \
   `, telegramChatId)

  res.status(200).json({ name: 'John-Doe' })
  return
}
