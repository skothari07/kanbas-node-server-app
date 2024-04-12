import mongoose from "mongoose";

const enrollmentSchema = new mongoose.Schema({
    course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'courses',
        required: true
    },
    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    }, { collection: "enrollment" });
    
export default enrollmentSchema;