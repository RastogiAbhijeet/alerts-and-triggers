// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { supabaseClient } from 'lib/utils/supabase'
import type { NextApiRequest, NextApiResponse } from 'next'


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {

  const {data, error } = await supabaseClient
      .from<any>("members")
      .insert({github_username: "TEST", telegram_username: "TEST"})

      

  if(error){
    console.log(error)
    res.status(400).json({ name: "SUPABASE ERROR" })
    return
  }

  res.status(200).json({ name: 'John-Doe' })
  return
}
