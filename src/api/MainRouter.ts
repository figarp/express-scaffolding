import express from "express";
import { handleErrors } from "../middleware/error/ErrorHandler";

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({ message: "successful" });
});

router.use(handleErrors);

export const MainRouter = router;
