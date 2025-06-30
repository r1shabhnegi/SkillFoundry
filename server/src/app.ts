import express from "express";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";
import winston from "winston";
import compression from "compression";
import dotenv from "dotenv";
import path from "path";
import limiter from "./configs/rate-limiter";
import logger from "./configs/logger";

dotenv.config();

const app = express();

if (process.env.NODE_ENV !== "production") {
  logger.add(
    new winston.transports.Console({
      format: winston.format.simple(),
    })
  );
}

app.use(helmet());
app.use(
  cors({
    origin: process.env.CORS_ORIGIN || "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(compression());
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));

app.use(limiter);

app.use(
  morgan("combined", {
    stream: {
      write: (message) => logger.info(message.trim()),
    },
  })
);

app.use(express.static(path.join(__dirname, "public")));

const apiRouter = express.Router();
apiRouter.get("/health", (req, res) => {
  res.status(200).json({ status: "OK", timestamp: new Date().toISOString() });
});

// Mount API routes
app.use("/api/v1", apiRouter);

// Error handling middleware
app.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});

app.use((err, req, res, next) => {
  logger.error({
    message: err.message,
    stack: err.stack,
    status: err.status || 500,
  });

  res.status(err.status || 500).json({
    error: {
      message:
        process.env.NODE_ENV === "production"
          ? "Internal Server Error"
          : err.message,
      status: err.status || 500,
    },
  });
});

// Server setup
const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
  logger.info(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});

// Handle uncaught exceptions and rejections
process.on("uncaughtException", (err) => {
  logger.error("Uncaught Exception:", err);
  process.exit(1);
});

process.on("unhandledRejection", (err) => {
  logger.error("Unhandled Rejection:", err);
  process.exit(1);
});

export default app;
