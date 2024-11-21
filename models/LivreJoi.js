import Joi from "joi";

const livreSchema = Joi.object({
  titre: Joi.string().min(3).max(100).required().messages({
    "string.empty": "Le titre est obligatoire.",
    "string.min": "Le titre doit contenir au moins 3 caractères.",
    "string.max": "Le titre ne peut pas dépasser 100 caractères.",
  }),
  auteur: Joi.string().required().messages({
    "string.empty": "L'auteur est obligatoire.",
  }),
  categories: Joi.array().items(Joi.string()).required().messages({
    "array.base": "Les catégories doivent être un tableau de chaînes.",
  }),
});

export default livreSchema;
