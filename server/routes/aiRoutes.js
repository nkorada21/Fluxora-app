import express from "express";
import { generateArticle } from "../controllers/aiController.js";
import { auth } from "../middlewares/Auth.js";

const aiRouter = express.Router();

aiRouter.post('/generate-article', auth, generateArticle)

export default aiRouter