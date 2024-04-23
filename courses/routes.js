import * as dao from "./dao.js"; 

export default function CourseRoutes(app) {

    app.post("/api/courses", async (req, res) => {
        const course = {
            ...req.body,
        };
        if (course.courseId === '0') {
            course.courseId = 'RS' + Math.floor(Math.random() * 1000);
        }
        const newCourse = await dao.createCourse(course);
        res.send(course);
    });

    app.delete("/api/courses/:id", async (req, res) => {
        const { id } = req.params;
        const status = await dao.deleteCourse(id);
        res.sendStatus(204);
    });

    app.put("/api/courses/:id", async (req, res) => {
        const { id } = req.params;
        const course = await dao.updateCourse(id, req.body);
        res.sendStatus(204);
    });

    app.get("/api/courses/:id", async (req, res) => {
        const { id } = req.params;
        const course = await dao.findCourseByID(id);
        if (!course) {
            res.status(404).send("Course not found");
            return;
        }
        res.send(course);
    });

    app.get("/api/courses", async (req, res) => {
        const courses = await dao.findAllCourses();
        res.send(courses);
    });
}