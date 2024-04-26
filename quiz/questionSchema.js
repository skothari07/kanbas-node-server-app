import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
    questionId: {
        type: String, required: true, unique: true, default: function () {
            return 'QS' + Math.floor(Math.random() * 1000);
        }
    },
    title: { type: String, required: true },
    description: { type: String, required: true },
    points: { type: Number, default: 0 },
    question_type: {
        type: String,
        enum: ['Multiple Choice', 'True False', 'Fill in the blanks'],
    },
    options: [],
    correctChoiceIndex: { type: Number, default: 0, required: true },
    blanks: [],
},
    { collection: "questions" });

export default questionSchema;