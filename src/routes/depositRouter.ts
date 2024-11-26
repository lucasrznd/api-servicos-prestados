import { Router } from "express";
import DepositController from "../controllers/deposit.controller";

const controller = new DepositController();

const depositRouter = Router();

depositRouter.get('/deposits', controller.findAll.bind(controller));
depositRouter.post('/deposits', controller.create.bind(controller));

export default depositRouter;