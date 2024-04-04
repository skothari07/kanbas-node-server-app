import express from 'express';
import cors from "cors";
import Hello from "./Hello.js";
import Lab5 from "./Lab5.js";
import CourseRoutes from './courses/routes.js';
import ModuleRoutes from './modules/routes.js';
import AssignmentRoutes from './assignments/routes.js';
import mongoose from "mongoose";
import UserRoutes from "./Users/routes.js";
import session from "express-session";
import "dotenv/config";


mongoose.connect("mongodb://127.0.0.1:27017/kanbas");
const app = express();
app.use(cors({
    credentials: true,
    origin: process.env.FRONTEND_URL,
}));
const sessionOptions = {
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
};
if (process.env.NODE_ENV !== "development") {
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
        sameSite: "none",
        secure: true,
    };
}
app.use(session(sessionOptions));
app.use(express.json());
UserRoutes(app);
Hello(app);
Lab5(app);
CourseRoutes(app);
ModuleRoutes(app);
AssignmentRoutes(app);
app.listen(process.env.PORT || 4000);