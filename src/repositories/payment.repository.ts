import { ModelStatic } from "sequelize";
import Payment from "../models/Payment";
import IPayment from "../interfaces/IPayment";
import Job from "../models/Job";

class PaymentRepository {
    private model: ModelStatic<Payment> = Payment;

    async findAll() {
        return await this.model.findAll({
            attributes: { exclude: ['jobId'] },
            include: { model: Job, as: 'job' },
        });
    }

    async findByJob(jobId: number) {
        return await this.model.findAll({
            where: {
                jobId: jobId
            }
        })
    }

    async create(payment: IPayment) {
        const createdPayment = await this.model.create({ ...payment });
        return createdPayment;
    }
}

export default PaymentRepository;