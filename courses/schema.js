import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
        _id: String,
        name: { type: String, required: true, unique: true },
        number: { type: String, required: true, unique: true },
        image: String,
        startDate: Date,
        endDate: Date,
        instructor: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'users'
        }
    }, { collection: "courses" });
    
export default courseSchema;