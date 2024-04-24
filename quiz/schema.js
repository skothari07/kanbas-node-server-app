import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
    description: { type: String, required: true },
    points: { type: Number, default: 0 },
    questionType: {
        type: String,
        enum: ['Multiple Choice', 'True/False', 'Fill in the Blanks'],
        default: 'Multiple Choice'
    },
    options: [{
        text: String,
        isCorrect: Boolean
    }],
    trueFalse : Boolean,
    blanks:[{
        answer: String
    }],
  });

const quizSchema = new mongoose.Schema({
    qid: { type: String, required: true, unique: true, default: function() {
        return 'Q' + Math.floor(Math.random() * 1000);
    }},
    title: { type: String, required: true },
    desc: String,
    points: Number,
    quiz_type: {
        type: String,
        enum: ["Graded Quiz", "Practice Quiz", "Graded Survey", "Ungraded Survey"],
        default: "Graded Quiz",
    },
    assignment_group: {
        type: String,
        enum: ["Quizzes", "Exams", "Assignments", "Project"],
        default: "Quizzes",
    },
    shuffle_answers: { type: Boolean, default: true },
    time_limit: { type: Number, default: 20 },
    multiple_attempts: { type: Boolean, default: false },
    show_correct_answers: { type: Boolean, default: false },
    access_code: { type: String, default: "" },
    one_question: { type: Boolean, default: true },
    webcam_required: { type: Boolean, default: false },
    lock_questions: { type: Boolean, default: false },
    available: Date,
    due_date: Date,
    until_date: Date,
    isPublished: Boolean,
    course: {
        type: String,
        ref: 'courseModel',
        required: true
    },
    questions: [questionSchema],
},
    { collection: "quizzes" });
    
export default quizSchema;