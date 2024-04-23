import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
        name: { type: String, required: true, unique: true },
        courseId: { type: String, required: true, unique: true, default: function() {
            return 'RS' + Math.floor(Math.random() * 1000);
        }},
        image: String,
        startDate: Date,
        endDate: Date,
        instructor: {
            type: String,
            ref: 'UserModel',
            required: true
        }
    }, { collection: "courses" });
    
export default courseSchema;