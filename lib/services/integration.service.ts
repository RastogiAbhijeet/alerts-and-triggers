import axios from "axios"

interface SubmitTelegramChatIdProps {
  telegramChatId: string;
  configurationId: string;
}

export const submitTelegramChatId = async (req : SubmitTelegramChatIdProps) => {
  const res = await axios.post(`${process.env.VERCEL_URL}/api/configure`, req)
  return res.data
}