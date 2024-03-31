import express from 'express';
import cors from "cors";
import Hello from "./Hello.js";
import Lab5 from "./Lab5.js";
import CourseRoutes from './courses/routes.js';

const app = express();
app.use(cors());
app.use(express.json());
Hello(app);
Lab5(app);
CourseRoutes(app);
app.listen(4000);