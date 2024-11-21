import express from "express";
import { addAuthor } from "../controllers/AuthorController.js";

const router = express.Router();

router.post("/addAuthor", addAuthor);

export default router;
