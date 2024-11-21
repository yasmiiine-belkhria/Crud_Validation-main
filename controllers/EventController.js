import Event from "../models/Event.js";

export const createEvent = async (req, res) => {
  const { titre, date_debut, date_fin } = req.body;

  try {
    // Créer un nouvel événement
    const event = new Event({ titre, date_debut, date_fin });
    await event.save();

    res.status(201).json({ message: "Événement créé avec succès", event });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ message: "Erreur serveur lors de la création de l'événement" });
  }
};
