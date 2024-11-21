import mongoose, { Schema } from "mongoose";

const CategorySchema = mongoose.Schema({
  titre: {
    type: String,
    enum: ["Horror", "Mystrey"],
  },
});

export default mongoose.model("Category", CategorySchema);
