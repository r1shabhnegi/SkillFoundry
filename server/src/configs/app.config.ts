import getEnv from "../common/utils/get-env";

const appConfig = () => ({
  PORT: getEnv("PORT", "5000"),
  CLIENT_URL: getEnv("CLIENT_URL", "http://localhost:3000"),
  DB_URL: getEnv("DB_URL"),
  BASE_URL: getEnv("BASE_URL", "/api/v1"),
  JWT: {
    SECRET: getEnv("JWT_SECRET"),
    EXPIRES_IN: getEnv("JWT_EXPIRES_IN", "1h"),
    REFRESH_SECRET: getEnv("JWT_REFRESH_SECRET"),
    REFRESH_EXPIRES_IN: getEnv("JWT_REFRESH_EXPIRES_IN", "10d"),
  },
});

export default appConfig();
