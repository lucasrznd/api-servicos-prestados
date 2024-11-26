import JobRepository from "../repositories/job.repository";
import formatCurrency from "../utils/currency";
import { resp } from "../utils/resp";

class JobService {
    private repository = new JobRepository();

    async findAll() {
        const jobs = await this.repository.findAll();
        return resp(200, jobs);
    }

    async getNotFullyPaid() {
        const jobs = await this.repository.getNotFullyPaid();
        var totalSum = 0;
        jobs.forEach((job) => {
            totalSum += job.price;
        });

        return resp(200, { totalPending: formatCurrency(totalSum) });
    }
}

export default JobService;