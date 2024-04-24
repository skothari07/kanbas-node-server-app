import * as dao from "./dao.js"; 

function QuizRoutes(app) {

    app.get("/api/courses/Quiz/:quizId", async (req, res) => {
        const { qid } = req.params;
        const quiz = await dao.findQuizById(qid);
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
}
export default QuizRoutes;