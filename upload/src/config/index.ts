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
