import type { Config } from "drizzle-kit";
import appConfig from "./src/configs/app.config";

export default {
  schema: "./src/database/schema.ts",
  out: "./src/database/migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: appConfig.DB_URL,
  },
} satisfies Config;
