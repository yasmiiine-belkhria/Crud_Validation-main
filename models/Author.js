import mongoose from "mongoose";

const AuthorSchema = mongoose.Schema({
  lastname: { type: String, required: true },
  firstname: { type: String, required: true },
  Nationality: { type: String, required: true },
});

export default mongoose.model("Author", AuthorSchema);
