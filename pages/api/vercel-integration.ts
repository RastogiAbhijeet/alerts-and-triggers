// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { supabaseClient } from 'lib/utils/supabase'
import type { NextApiRequest, NextApiResponse } from 'next'


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {

  console.log(req.body.payload)

  const {data, error } = await supabaseClient
      .from<any>("members")
      .insert({github_username: JSON.stringify(req.body) ?? "CHAKNA", telegram_username: process.env.VERCEL_GIT_COMMIT_AUTHOR_NAME})

      

  if(error){
    console.log(error)
    res.status(400).json({ name: "SUPABASE ERROR" })
    return
  }

  res.status(200).json({ name: 'John-Doe' })
  return
}
