import { Router } from "express";
import ContractController from "../controllers/contract.controller";

const controller = new ContractController();

const contractRouter = Router();

contractRouter.get('/contracts', controller.findAll.bind(controller));
contractRouter.get('/contracts/profile', controller.listByProfile.bind(controller));
contractRouter.post('/contracts', controller.create.bind(controller));

export default contractRouter;