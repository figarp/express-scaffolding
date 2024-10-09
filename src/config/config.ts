import dotenv from "dotenv";
import path from "path";

// Interfaces
interface AppConfig {
  port: string | number | undefined;
  logsFolder: string | undefined;
}

// Config variables
let app: AppConfig = {
  port: undefined,
  logsFolder: undefined,
};

// Config Constans
const environment: string = process.env.NODE_ENV || "prod";

if (environment === "prod") {
  app = {
    port: 9000,
    logsFolder: "./logs",
  };
} else {
  if (environment.trim() === "test") {
    app = {
      port: 9000,
      logsFolder: "./logs",
    };
  }
  if (environment.trim() === "dev") {
    dotenv.config({ path: path.join(__dirname, "../../dev.env") });

    app = {
      port: process.env.PORT,
      logsFolder: process.env.LOGS_FOLDER,
    };
  }
}

export const mainConfig = app;
export const env = environment;
