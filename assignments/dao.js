import model from "./model.js";

export const createAssignment = (assignment) => {
    return model.create(assignment);
};
export const findAllAssignments = () => model.find();
export const findAssignmentByCourse = (course) => model.find({ course: course });
export const deleteAssignment = (assignmentId) => model.deleteOne({ _id: assignmentId });
export const updateAssignment = (assignmentId, updatedAssignment) => model.updateOne({ _id: assignmentId }, { $set: updatedAssignment });