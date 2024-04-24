import model from "./model.js";

export const createQuiz = (quiz) => {
    return model.create(quiz);
};
export const findQuizzesByCourse = (course) => model.find({ course: course });
export const findQuizById = (quizId) => model.find({ quizId: quizId });
export const deleteQuiz = (quizId) => model.deleteOne({ qid: quizId });
export const updateQuiz = (quizId, updatedQuiz) => model.updateOne({ qid: quizId }, { $set: updatedQuiz });