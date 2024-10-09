import express from "express";
import cors from "cors";
import { env, mainConfig } from "./config/config";
import ErrorResponse from "./middleware/error/ErrorResponse";
import { MainRouter } from "./api/MainRouter";
import logger from "./logger";

const app = express();
app.use(cors());

app.use("/v1/api", MainRouter);

app.use(express.json());

const PORT = mainConfig.port;

app.all("*", (_req, res) => {
  logger.warn("Route not found");
  res.status(404).json(new ErrorResponse("Route not found"));
});

export default app.listen(PORT, () => {
  logger.info(`Listening on port '${PORT}', in '${env}' environment`);
});
