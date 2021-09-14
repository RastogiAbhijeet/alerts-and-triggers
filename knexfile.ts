import { Knex } from "knex"
import dotenv from "dotenv"
import { env } from "./lib/utils/env"

const config: Knex.Config = {
  test: {
    client: "pg",
    connection: process.env.DATABASE_URL || env.DATABASE_URL,
  },
  development: {
    client: "pg",
    connection: process.env.DATABASE_URL || env.DATABASE_URL,
  },
  production: {
    client: "pg",
    connection: process.env.DATABASE_URL || env.DATABASE_URL,
  },
}[process.env.NODE_ENV as "test" | "development" | "production"]

export default config
