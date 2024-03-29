import dotenv from "dotenv";
import { resolve } from "path";

if (process.env.NODE_ENV !== "prod") {
  const filePath = resolve(__dirname, `../.env.${process.env.NODE_ENV}`);
  dotenv.config({ path: filePath });
} else {
  dotenv.config();
}

export const HOST = process.env.HOST || "0.0.0.0";
export const PORT = process.env.PORT || "8001";
export const WEB_URL = process.env.WEB_URL || "http://localhost:3000";
export const MESSAGE_BROKER_URL = process.env.MESSAGE_BROKER_URL || "";
export const EXCHANGE_NAME = process.env.EXCHANGE_NAME || "";
export const DEPLOY_SUCCESS_QUEUE = process.env.DEPLOY_SUCCESS_QUEUE || "";
export const UPLOAD_ROUTING_KEY = process.env.UPLOAD_ROUTING_KEY || "";
