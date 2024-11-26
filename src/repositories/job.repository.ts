import { ModelStatic } from "sequelize";
import Job from "../models/Job";
import Payment from "../models/Payment";
import IJob from "../interfaces/IJob";
import { Op } from "sequelize";

class JobRepository {
    private model: ModelStatic<Job> = Job;

    async findAll() {
        return await this.model.findAll({
            include: { model: Payment, as: 'payments' }
        });
    }

    async findById(id: number) {
        return await this.model.findByPk(id);
    }

    async create(job: IJob) {
        const createdJob = await this.model.create({ ...job });
        return createdJob;
    }

    async updatePayment(job: IJob) {
        return await this.model.update(
            {
                paymentDate: job.paymentDate,
                paid: job.paid
            },
            {
                where: {
                    id: job.id
                }
            }
        );
    }

    async getNotFullyPaid(contractId: number) {
        return await this.model.findAll({
            where: {
                contractId: {
                    [Op.eq]: contractId
                },
                paid: 0
            },
            include: { model: Payment, as: 'payments' }
        });
    }
}

export default JobRepository;