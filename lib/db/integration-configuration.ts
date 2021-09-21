import { supabaseClient } from "lib/utils/supabase";

const tableName = "integration_configuration"

export class IntegrationConfiguration {
  public static async getConfigurationById(configurationId: string){
    const {data, error} = await supabaseClient.from<any>(tableName).select("configuration_id, telegram_chat_id").match({configuration_id: configurationId}).single()

    console.log("DATAAA: ", configurationId)

    if(error){
      throw `${error} | CONFIGURATION : ${configurationId}`
    }

    return {
      configurationId: data.configuration_id,
      telegramChatId: data.telegram_chat_id
    }
  }

  public static async insertConfiguration(configurationId: string, telegramChatId: string){
    const {data, error} = await supabaseClient.from<any>(tableName).insert({
      configuration_id: configurationId, 
      telegram_chat_id: telegramChatId
    })

    if(error){
      throw error
    }

    return {
      id: data[0].id,
      configurationId: data[0].configuration_id,
      telegramChatId: data[0].telegram_chat_id
    }
  }
}