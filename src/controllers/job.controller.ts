import { NextFunction, Request, Response } from "express";
import JobService from "../services/job.service";

class JobController {
    private service = new JobService();

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

    async getNotFullyPaid(req: Request, res: Response, next: NextFunction) {
        try {
            const contractId = req.query.contractId;
            const { status, message } = await this.service.getNotFullyPaid(+contractId!);
            res.status(status).json(message);
        } catch (error) {
            next(error);
        }
    }
}

export default JobController;