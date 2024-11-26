import { ModelStatic } from "sequelize";
import Job from "../models/Job";
import Payment from "../models/Payment";

class JobRepository {
    private model: ModelStatic<Job> = Job;

    async findAll() {
        return await this.model.findAll({
            include: { model: Payment, as: 'payments' }
        });
    }

    async getNotFullyPaid() {
        return await this.model.findAll({
            where: {
                paid: 0
            },
            include: { model: Payment, as: 'payments' }
        });
    }
}

export default JobRepository;