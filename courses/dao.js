import model from "./model.js";
import enrollmentModel from "./enrollmentModel.js";

export const createCourse = (course) => {
    return model.create(course);
};
export const findAllCourses = () => model.find();
export const findCourseByID = (courseID) => model.find({ courseId: courseID });
export const deleteCourse = (courseID) => model.deleteOne({ courseId: courseID });
export const updateCourse = (courseID, updatedCourse) => model.updateOne({ courseId: courseID }, { $set: updatedCourse });