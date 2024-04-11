import model from "./model.js";

export const createQuiz = (quiz) => {
    return model.create(quiz);
};
export const findQuizzesByCourse = (course) => model.find({ course: course });
export const deleteQuiz = (quizId) => model.deleteOne({ _id: quizId });
export const updateQuiz = (quizId, updatedQuiz) => model.updateOne({ _id: quizId }, { $set: updatedQuiz });