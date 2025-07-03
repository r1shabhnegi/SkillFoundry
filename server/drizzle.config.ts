import type { Config } from "drizzle-kit";
import appConfig from "./src/configs/app.config";

export default {
  schema: "./src/database/drizzle/schema.ts",
  out: "./src/database/drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: appConfig.DB_URL,
  },
} satisfies Config;
