import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
    description: String,
    options: [],
    type: String,
    answers: [],
  });

const quizSchema = new mongoose.Schema({
    title: String,
    desc: String,
    points: Number,
    due_date: Date,
    course: String,
    isPublished: Boolean,
    questions: [questionSchema],
},
    { collection: "quizzes" });
    
export default quizSchema;