import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
    quizId: String,
    description: String,
    options: [],
    type: String,
    answers: [],
  });

const quizSchema = new mongoose.Schema({
    _id: { type: String, required: true, unique: true },
    title: String,
    desc: String,
    points: Number,
    due_date: Date,
    course: String,
    isPublished: Boolean,
    questions: [questionSchema],
},
    { collection: "quiz" });
    
export default quizSchema;