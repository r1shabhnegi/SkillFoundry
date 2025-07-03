import "dotenv/config";
import cors from "cors";
import express from "express";
import cookieParser from "cookie-parser";
import appConfig from "./configs/app.config";
import router from "./router";

const app = express();
const BASE_URL = appConfig.BASE_URL;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);
app.use(cookieParser());

app.use(BASE_URL, router);

export default app;
