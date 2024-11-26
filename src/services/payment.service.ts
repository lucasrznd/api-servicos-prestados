import IPayment from "../interfaces/IPayment";
import JobRepository from "../repositories/job.repository";
import PaymentRepository from "../repositories/payment.repository";
import { resp, respM } from "../utils/resp";

class PaymentService {
    private repository = new PaymentRepository();
    private jobRepository = new JobRepository();

    async findAll() {
        const payments = await this.repository.findAll();
        return resp(200, payments);
    }

    async create(payment: IPayment) {
        if (payment.operationDate === null || payment.operationDate === undefined) {
            payment.operationDate = new Date(Date.now()); 
        }

        var job = await this.jobRepository.findById(payment.jobId);
        if (job === null) {
            return respM(404, 'Job not found.');
        }

        if (job.paid === 1) {
            return respM(400, 'Payment already done.');
        }

        const payments = await this.findByJob(job.id);
        let totalPaid = 0;
        for (const payment of payments) {
            totalPaid += payment.paymentValue;
        }
        totalPaid += payment.paymentValue;

        if (totalPaid >= job.price) {
            job.paymentDate = new Date(Date.now());
            job.paid = 1;
            this.jobRepository.updatePayment(job);
        }

        const createdPayment = await this.repository.create(payment);
        return resp(200, createdPayment);
    }

    async findByJob(jobId: number) {
        return this.repository.findByJob(jobId);
    }
}

export default PaymentService;