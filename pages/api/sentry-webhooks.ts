// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { IntegrationConfiguration } from 'lib/db/integration-configuration'
import { TelegramService } from 'lib/services/telegram'
import { supabaseClient } from 'lib/utils/supabase'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {

  const actor = req.body.actor.name ?? "CUSTOM NAME"
  const issueUrl = req.body.data.event.issue_url ?? "CUSTOM ISSUE URL"
  const eventUrl = req.body.data.event.web_url ?? "CUSTOM ISSUE URL"
  const level = req.body.data.event.level ?? "CUSTOM ISSUE LEVEL"
  const metadata = JSON.stringify(req.body.data.event.metadata, undefined, "2") ?? "CUSTOM METADATA"
  const errorType = req.body.event.type ?? "CUSTOM ERROR TYPE"
  // const {telegramChatId} = await IntegrationConfiguration.getConfigurationById(req.body.configurationId)


  await TelegramService.sendMessage(`SENTRY ERROR: \
   \n\`Actor\`: ${actor} \
   \n\`Issue Url\`: ${issueUrl} \
   \n\`Event Url\`: ${eventUrl} \
   \n\`Error Level\` : ${level} \
   \n\`Error Metadata\` : ${metadata} \
   \n\`Error Type\` : ${errorType} \
   `, "-588019944")

  res.status(200).json({ name: 'John-Doe' })
  return
}
