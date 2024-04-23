import * as dao from "./dao.js"; 

function AssignmentRoutes(app) {

    app.get("/api/courses/:cid/assignments", async (req, res) => {
        const { cid } = req.params;
        const assignments = await dao.findAssignmentByCourse(cid);
        res.send(assignments);
    });

    app.post("/api/courses/:cid/assignments", async (req, res) => {
        const { cid } = req.params;
        const newAssignment = {
            ...req.body,
            course: cid,
        };
        delete newAssignment.aid;
        const assignment = await dao.createAssignment(newAssignment);
        res.send(newAssignment);
    });

    app.delete("/api/assignments/:aid", async (req, res) => {
        const { aid } = req.params;
        const status = await dao.deleteAssignment(aid);
        res.sendStatus(200);
    });

    app.put("/api/assignments/:aid", async (req, res) => {
        const { aid } = req.params;
        const status = await dao.updateAssignment(aid, req.body);
        res.sendStatus(204);
    });

}
export default AssignmentRoutes;