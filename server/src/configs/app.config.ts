import getEnv from "../common/utils/get-env";

const appConfig = () => ({
  PORT: getEnv("PORT", "5000"),
  NODE_ENV: getEnv("NODE_ENV", "development"),
  CLIENT_URL: getEnv("CLIENT_URL", "http://localhost:3000"),
  DB_URL: getEnv("DB_URL"),
  BASE_URL: getEnv("BASE_URL", "/api/v1"),
  JWT: {
    SECRET: getEnv("JWT_SECRET"),
    EXPIRES_IN: getEnv("JWT_EXPIRES_IN", "1h"),
    REFRESH_SECRET: getEnv("JWT_REFRESH_SECRET"),
    REFRESH_EXPIRES_IN: getEnv("JWT_REFRESH_EXPIRES_IN", "10d"),
  },
  RESEND_API_KEY: getEnv("RESEND_API_KEY"),
  MAILER_SENDER: getEnv("MAILER_SENDER"),
});

export default appConfig();
