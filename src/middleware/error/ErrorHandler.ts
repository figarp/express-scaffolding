import { NextFunction, Request, Response } from "express";
import ErrorResponse from "./ErrorResponse";
import logger from "../../logger";

export const handleErrors = (
  err: any,
  _req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _next: NextFunction,
) => {
  logger.error(err.message, err.stack);

  err.status = err.status || 500;
  err.message = err.message || "Something went wrong";

  res.status(err.status).json(new ErrorResponse(err.message));
};
