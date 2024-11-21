import Livre from "../models/Livre.js";

export const addLivreJoi = async (req, res) => {
  try {
    const livre = new Livre({
      titre: req.body.titre,
      auteur: req.body.auteur,
      categories: req.body.categories,
    });

    await livre.save();
    res.status(201).json({ model: livre, message: "Livre ajouté avec succès" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erreur interne du serveur", error: error.message });
  }
};
