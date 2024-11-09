import { config } from "dotenv";

config()

export const NATS_SERVER = process.env.NATS_SERVER;
export const DATABASE_URL = process.env.DATABASE_URL;
export const MP_ACCESS_TOKEN = process.env.MP_ACCESS_TOKEN;
export const GATEWAY_API = process.env.GATEWAY_API;
export const API_VERSION = process.env.API_VERSION;