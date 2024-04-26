import mongoose from "mongoose";
import schema from "./questionSchema.js";

const questionModel = mongoose.model("questionModel", schema);

export default questionModel;