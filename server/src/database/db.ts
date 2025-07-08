import "dotenv/config";
import { drizzle } from "drizzle-orm/node-postgres";
import appConfig from "../configs/app.config";

export const db = drizzle(appConfig.DB_URL!);
