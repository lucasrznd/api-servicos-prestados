import { NextFunction, Request, Response } from "express";
import DepositService from "../services/deposit.service";

class DepositController {
    private service = new DepositService();

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
}

export default DepositController;