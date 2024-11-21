import express from "express";
import Livre from "../models/Livre.js";
import {
  addLivre,
  addLivreValidator,
  deleteLivre,
  getLivre,
  getLivres,
  getLivresparAuteur,
  livreDisponible,
  updateLivre,
} from "../controllers/LivreController.js";
import { validateLivre } from "../middellwares/LivreValidation.js";
import { addLivreJoi } from "../controllers/LivreValidator.js";

const router = express.Router();

router.post("/addLivre/:id_author/:id_categorie", addLivre);

router.post("/addLivreValidator/:id_author/:id_categorie", addLivreValidator);

router.post("/addLivreJ/:id_author/:id_categorie", validateLivre, addLivreJoi);

router.get("/getLivres", getLivres);

router.get("/getLivres/:id", getLivresparAuteur);

router.patch("/updateLivre/:id", updateLivre);

router.get("/getLivre/:id", getLivre);

router.delete("/deleteLivre/:id", deleteLivre);

router.get("/livreDisponible", livreDisponible);

export default router;
