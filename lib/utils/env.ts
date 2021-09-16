import dotenv from "dotenv"
import fs from "fs"

const all = fs.existsSync("./.env") ? dotenv.parse( fs.readFileSync("./.env")) : {}
const development =  fs.existsSync("./.env") ? dotenv.parse(fs.readFileSync("./.env.development")) : {}
const local = fs.existsSync("./.env.local")
  ? dotenv.parse(fs.readFileSync("./.env.local"))
  : {}

export const env = Object.assign({}, all, development, local)
