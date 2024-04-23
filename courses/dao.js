import model from "./model.js";
import enrollmentModel from "./enrollmentModel.js";

export const createCourse = (course) => {
    return model.create(course);
};
export const findAllCourses = () => model.find();
export const findCourseByID = (courseID) => model.find({ courseId: courseID });
export const findCourseByInstructor = (instructor) => model.find({ instructor: instructor });
export const deleteCourse = (courseID) => model.deleteOne({ courseId: courseID });
export const updateCourse = (courseID, updatedCourse) => model.updateOne({ courseId: courseID }, { $set: updatedCourse });
export const findCoursesByStudent = (studentId) => enrollmentModel.find({ student: studentId });
export const findCourses = (courseIDs) => model.find({ courseId: { $in: courseIDs } });