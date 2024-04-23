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
    available: Date,
    due_date: Date,
    course: {
        type: String,
        ref: 'courseModel',
        required: true
    },
    isPublished: Boolean,
    questions: [questionSchema],
},
    { collection: "quizzes" });
    
export default quizSchema;