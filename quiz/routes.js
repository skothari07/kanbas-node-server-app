import * as dao from "./dao.js"; 

function QuizRoutes(app) {

    app.get("/api/courses/Quiz/:quizId", async (req, res) => {
        const { quizId } = req.params;
        const quiz = await dao.findQuizById(quizId);
        res.send(quiz);
    });
    
    app.get("/api/courses/:cid/quiz", async (req, res) => {
        const { cid } = req.params;
        const quizzes = await dao.findQuizzesByCourse(cid);
        res.send(quizzes);
    });

    app.post("/api/courses/:cid/quiz", async (req, res) => {
        const { cid } = req.params;
        const newQuiz = {
            ...req.body,
            course: cid,
        };
        if (newQuiz.qid === '') {
            newQuiz.qid = 'Q' + Math.floor(Math.random() * 1000);
        }
        const quiz = await dao.createQuiz(newQuiz);
        res.send(newQuiz);
    });

    app.delete("/api/quiz/:qid", async (req, res) => {
        const { qid } = req.params;
        const status = await dao.deleteQuiz(qid);
        res.sendStatus(200);
    });

    app.put("/api/quiz/:qid", async (req, res) => {
        const { qid } = req.params;
        const status = await dao.updateQuiz(qid, req.body);
        res.sendStatus(204);
    });
   
    app.get("/api/courses/quiz/questions/:qsId", async (req, res) => {
        const { qsId } = req.params;
        const questions = await dao.findQuestionById(qsId);
        res.send(questions);
    });

    app.post("/api/courses/quiz/question/create", async (req, res) => {
        const newQuestion = {
            ...req.body,
        };
        if (newQuestion.questionId === '') {
            newQuestion.questionId = 'QS' + Math.floor(Math.random() * 1000);
        }
        const question = await dao.createQuestion(newQuestion);
        res.send(newQuestion);
    });

    app.delete("/api/courses/quiz/question/:questionId", async (req, res) => {
        const { questionId } = req.params;
        const status = await dao.deleteQuestion(questionId);
        res.sendStatus(200);
    });

    app.put("/api/courses/quiz/question/:questionId", async (req, res) => {
        const { questionId } = req.params;
        const status = await dao.updateQuestion(questionId, req.body);
        res.sendStatus(204);
    });

}
export default QuizRoutes;