import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("integration_configuration", (tb) => {
    tb.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'))
    tb.text("configuration_id").notNullable().unique()
    tb.text("telegram_chat_id").notNullable()
    tb.timestamp("created_at").defaultTo(knex.fn.now())
    tb.timestamp("updated_at").defaultTo(knex.fn.now())
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists("integration_configuration")
}
