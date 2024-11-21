import Author from "../models/Author.js";

export const addAuthor = async (req, res) => {
  const author = new Author(req.body);
  await author.save();
  res.status(201).json({ model: author, message: "auteur ajouté avec succès" });
};
