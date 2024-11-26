import { NextFunction, Request, Response } from "express";
import ProfileService from "../services/profile.service";

class ProfileController {
    private service = new ProfileService();

    async findAll(req: Request, res: Response, next: NextFunction) {
        try {
            const type = req.query.type?.toString();
            const { status, message } = await this.service.findAll(type!);
            res.status(status).json(message);
        } catch (error) {
            next(error);
        }
    }

    async create(req: Request, res: Response, next: NextFunction) {
        try {
            const {status, message} = await this.service.create(req.body);
            res.status(status).json(message);
        } catch (error) {
            next(error);
        }
    }

    async getBalance(req: Request, res: Response, next: NextFunction) {
        try {
            const id = req.params.id;
            const { status, message } = await this.service.getBalance(+id);
            res.status(status).json(message);
        } catch (error) {
            next(error);
        }
    }
}

export default ProfileController;