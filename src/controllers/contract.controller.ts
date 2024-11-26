import { NextFunction, Request, Response } from "express";
import ContractService from "../services/contract.service";

class ContractController {
    private service = new ContractService();

    async findAll(req: Request, res: Response, next: NextFunction) {
        try {
            const { status, message } = await this.service.findAll();
            res.status(status).json(message);
        } catch (error) {
            next(error);
        }
    }

    async create(req: Request, res: Response, next: NextFunction) {
        try {
            const { status, message } = await this.service.create(req.body);
            res.status(status).json(message);
        } catch (error) {
            next(error);
        }
    }

    async listByProfile(req: Request, res: Response, next: NextFunction) {
        try {
            const id = req.query.id;
            const { status, message } = await this.service.listByProfile(+id!);
            res.status(status).json(message);
        } catch (error) {
            next(error);
        }
    }
}

export default ContractController;