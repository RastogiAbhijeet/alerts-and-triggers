import { config } from "dotenv"
import { API_CONFIG } from "lib/config/backend"
import { IntegrationConfiguration } from "lib/db/integration-configuration"
import TelegramBot from "node-telegram-bot-api"

export class TelegramService {
  public static async sendMessage (text: string, configurationId: string) {
    const bot = new TelegramBot(API_CONFIG.TELEGRAM_BOT_TOKEN)
    const {telegramChatId} = await IntegrationConfiguration.getConfigurationById(configurationId)
    const response = await bot.sendMessage(telegramChatId, text)
    return response
  }
}