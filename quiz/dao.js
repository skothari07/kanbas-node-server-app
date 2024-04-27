import model from "./model.js";
import questionModel from "./questionModel.js";

export const createQuiz = (quiz) => {
    return model.create(quiz);
};
export const findQuizzesByCourse = (course) => model.find({ course: course });
export const findQuizById = (quizId) => model.find({ qid: quizId });
export const deleteQuiz = (quizId) => model.deleteOne({ qid: quizId });
export const updateQuiz = (quizId, updatedQuiz) => model.updateOne({ qid: quizId }, { $set: updatedQuiz });
export const findQuestionById = (qsId) => questionModel.find({ questionId: qsId });
export const deleteQuestion = (questionId) => questionModel.deleteOne({ questionId: questionId });
export const updateQuestion = (questionId, updatedQuestion) => questionModel.updateOne({ questionId: questionId }, { $set: updatedQuestion });
export const createQuestion = (question) => {
    return questionModel.create(question);
} 