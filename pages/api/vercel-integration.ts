// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { supabaseClient } from 'lib/utils/supabase'
import type { NextApiRequest, NextApiResponse } from 'next'
import TelegramBot from "node-telegram-bot-api"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {

  const token = process.env.TELEGRAM_BOT_TOKEN
  const author = process.env.VERCEL_GIT_COMMIT_AUTHOR_LOGIN
  const branch = process.env.VERCEL_GIT_COMMIT_REF
  const commit = process.env.VERCEL_GIT_COMMIT_SHA

  const bot = new TelegramBot(token)


  const {data, error } = await supabaseClient
      .from<any>("members")
      .insert({github_username: req.body.type , telegram_username: process.env.VERCEL_GIT_COMMIT_AUTHOR_LOGIN})

  await bot.sendMessage("-588019944", `Author : ${author} \nBranch:${branch}\nDEPLOYMENT STATUS: ${req.body.type}`)

  if(error){
    console.log(error)
    res.status(400).json({ name: "SUPABASE ERROR" })
    return
  }

  res.status(200).json({ name: 'John-Doe' })
  return
}
