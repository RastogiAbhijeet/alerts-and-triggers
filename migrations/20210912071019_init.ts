import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("members", (tb) => {
    tb.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'))
    tb.text("github_username").notNullable()
    tb.text("telegram_username").notNullable()
    tb.timestamp("created_at").defaultTo(knex.fn.now())
    tb.timestamp("updated_at").defaultTo(knex.fn.now())
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists("members")
}
