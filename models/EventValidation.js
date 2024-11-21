// eventValidation.js
import Joi from "joi";

const eventSchema = Joi.object({
  titre: Joi.string().min(3).max(100).required().messages({
    "string.empty": "Le titre est obligatoire.",
    "string.min": "Le titre doit contenir au moins 3 caractères.",
    "string.max": "Le titre ne peut pas dépasser 100 caractères.",
  }),
  date_debut: Joi.date().greater("now").required().messages({
    "date.base": "La date de début doit être une date valide.",
    "date.greater": "La date de début doit être supérieure à la date actuelle.",
  }),
  date_fin: Joi.date().greater(Joi.ref("date_debut")).required().messages({
    "date.base": "La date de fin doit être une date valide.",
    "date.greater": "La date de fin doit être après la date de début.",
  }),
});

export default eventSchema;
