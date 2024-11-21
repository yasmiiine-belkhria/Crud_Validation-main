import express from "express";
import { createEvent } from "../controllers/EventController.js";
import { validateEvent } from "../middellwares/EventMiddellware.js";

const router = express.Router();

// Route pour créer un événement avec validation des données
router.post("/events", validateEvent, createEvent);

export default router;
