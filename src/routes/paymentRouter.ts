import { Router } from "express";
import PaymentController from "../controllers/payment.controller";

const controller = new PaymentController();

const paymentRouter = Router();

paymentRouter.get('/payments', controller.findAll.bind(controller));
paymentRouter.post('/payments', controller.create.bind(controller));

export default paymentRouter;