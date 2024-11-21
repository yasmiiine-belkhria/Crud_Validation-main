import Livre from "../models/Livre.js";
import Author from "../models/Author.js";
import Category from "../models/Category.js";

export const addLivre = async (req, res) => {
  let foundAuthor = await Author.findOne({
    _id: req.params.id_author,
  });
  if (!foundAuthor) {
    res.status(401).json({ message: "Auteur inexistant" });
  }
  let foundCategory = await Category.findOne({ _id: req.params.id_categorie });
  if (!foundCategory) {
    res.status(401).json({ message: "Auteur inexistant" });
  }
  const livre = new Livre({
    titre: req.body.titre,
    auteur: req.params.id_author,
    categories: req.params.id_categorie,
  });

  await livre.save();
  res.status(201).json({ model: livre, message: "Livre ajouté avec succès" });
};

export const addLivreValidator = async (req, res) => {
  try {
    let foundAuthor = await Author.findOne({
      _id: req.params.id_author,
    });
    if (!foundAuthor) {
      res.status(401).json({ message: "Auteur inexistant" });
    }

    // Vérifiez si l'auteur a déjà des livres
    const existingBooks = await Livre.find({ auteur: req.params.id_author });
    if (existingBooks.length === 0) {
      return res
        .status(400)
        .json({ message: "Cet auteur n'a pas encore publié de livres." });
    }

    let foundCategory = await Category.findOne({
      _id: req.params.id_categorie,
    });
    if (!foundCategory) {
      res.status(401).json({ message: "Auteur inexistant" });
    }
    const livre = new Livre({
      titre: req.body.titre,
      auteur: req.params.id_author,
      categories: req.params.id_categorie,
    });

    await livre.save();
    res.status(201).json({ model: livre, message: "Livre ajouté avec succès" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getLivres = async (req, res) => {
  const livres = await Livre.find();
  res.status(200).json({ model: livres, message: "sucsess" });
};

export const getLivresparAuteur = async (req, res) => {
  const livres = await Livre.findOne({ _id: req.params.id })
    .populate("auteur")
    .populate("categories");

  res.status(200).json({ model: livres, message: "sucsess" });
};

export const getLivre = async (req, res) => {
  const livre = await Livre.findOne({ _id: req.params.id });
  res.status(200).json({ model: livre, message: "success" });
};

export const updateLivre = async (req, res) => {
  const livre = await Livre.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
  });
  res.status(200).json({ message: "Success" });
};

export const deleteLivre = async (req, res) => {
  await Livre.deleteOne({ _id: req.params.id });
  res.status(200).json({ message: "Suppression réussite" });
};

export const livreDisponible = async (req, res) => {
  const livres = await Livre.find({ estDisponible: true });
  res.status(200).json({ model: livres, message: "success" });
};
