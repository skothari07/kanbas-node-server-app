import mongoose from "mongoose";
import enrollmentSchema from "./enrollmentSchema.js";

const enrollmentModel = mongoose.model("enrollmentModel", enrollmentSchema);

export default enrollmentModel;