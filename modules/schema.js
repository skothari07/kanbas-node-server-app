import mongoose from "mongoose";

const lessonSchema = new mongoose.Schema({
    name: String,
    description: String,
    module: String
  });

const moduleSchema = new mongoose.Schema({
    mid: { type: String, required: true, unique: true, default: function() {
        return 'M' + Math.floor(Math.random() * 1000);
    }},
    name: { type: String, required: true, unique: true },
    desc: String,
    course: {
        type: String,
        ref: 'courseModel',
        required: true
    },
    lessons: [lessonSchema]
},
    { collection: "modules" });
    
export default moduleSchema;