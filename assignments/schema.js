import mongoose from "mongoose";

const assignmentSchema = new mongoose.Schema({
    _id: { type: String, required: true, unique: true },
    title: String,
    desc: String,
    points: Number,
    due_date: Date,
    course: String,
},
    { collection: "assignments" });
    
export default assignmentSchema;