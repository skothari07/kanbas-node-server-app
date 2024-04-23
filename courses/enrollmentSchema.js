import mongoose from "mongoose";

const enrollmentSchema = new mongoose.Schema({
    course: {
        type: String,
        ref: 'courseModel',
        required: true
    },
    student: {
        type: String,
        ref: 'UserModel',
        required: true
    }
    }, { collection: "enrollment" });
    
export default enrollmentSchema;