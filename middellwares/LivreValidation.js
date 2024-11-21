import livreSchema from "../models/LivreJoi.js";

export const validateLivre = (req, res, next) => {
  const { error } = livreSchema.validate(req.body, { abortEarly: false }); // Valide toutes les erreurs

  if (error) {
    const errors = error.details.map((detail) => detail.message);
    return res.status(400).json({ message: "Validation échouée", errors });
  }

  next();
};
