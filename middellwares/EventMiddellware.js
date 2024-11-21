import eventSchema from "../models/EventValidation.js";

export const validateEvent = (req, res, next) => {
  const { error } = eventSchema.validate(req.body, { abortEarly: false });

  if (error) {
    const errors = error.details.map((detail) => detail.message);
    return res.status(400).json({ message: "Validation échouée", errors });
  }

  next();
};
