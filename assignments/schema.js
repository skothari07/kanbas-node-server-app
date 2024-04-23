import mongoose from "mongoose";

const assignmentSchema = new mongoose.Schema({
    aid: { type: String, required: true, unique: true, default: function() {
        return 'A' + Math.floor(Math.random() * 1000);
    }},
    title: String,
    desc: String,
    points: Number,
    due_date: Date,
    course: {
        type: String,
        ref: 'courseModel',
        required: true
    }
},
    { collection: "assignments" });
    
export default assignmentSchema;