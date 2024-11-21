import Category from "../models/Category.js";

export const addCategory = async (req, res) => {
  const categorie = new Category(req.body);
  await categorie.save();
  res
    .status(201)
    .json({ model: categorie, message: "category ajouté avec succès" });
};
