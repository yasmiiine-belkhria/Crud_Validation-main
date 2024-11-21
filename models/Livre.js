import mongoose, { Schema } from "mongoose";
import Joi from "joi";

const LivreSchema = mongoose.Schema({
  titre: {
    type: String,
    required: true,
  },
  auteur: {
    type: Schema.Types.ObjectId,
    ref: "Author",
    required: [true, "L'auteur est obligatoire"],
    validate: {
      validator: function (authorId) {
        // Valide de manière synchronisée, sans requête DB
        return authorId != null; // Exemple : l'auteur doit être défini
      },
      message: "Auteur invalide.",
    },
  },

  categories: [{ type: Schema.Types.ObjectId, ref: "Category" }],
  /*datePublication: {
    type: Date,
  },
  nbrPage: {
    type: Number,
  },
  estDisponible: {
    type: Boolean,
    required: true,
    default: true,
  },*/
});

export default mongoose.model("Livre", LivreSchema);
