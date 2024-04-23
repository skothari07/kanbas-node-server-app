import model from "./model.js";

export const createModule = (module) => {
    return model.create(module);
};
export const findModulesByCourse = (course) => model.find({ course: course });
export const deleteModule = (moduleId) => model.deleteOne({ mid: moduleId });
export const updateModule = (moduleId, updatedModule) => model.updateOne({ mid: moduleId }, { $set: updatedModule });