import { Router } from "express";
import ProfileController from "../controllers/profile.controller";

const controller = new ProfileController();

const profileRouter = Router();

profileRouter.get('/profiles', controller.findAll.bind(controller));
profileRouter.get('/profiles/balance/:id', controller.getBalance.bind(controller));
profileRouter.post('/profiles', controller.create.bind(controller));

export default profileRouter;