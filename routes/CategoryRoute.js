import express from "express";
import { addCategory } from "../controllers/CategoryController.js";

const router = express.Router();

router.post("/addCategory", addCategory);

export default router;
