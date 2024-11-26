import { Router } from "express";
import JobController from "../controllers/job.controller";

const controller = new JobController();

const jobRouter = Router();

jobRouter.get('/jobs', controller.findAll.bind(controller));
jobRouter.get('/jobs/not-fully-paid', controller.getNotFullyPaid.bind(controller));
jobRouter.post('/jobs', controller.create.bind(controller));

export default jobRouter;