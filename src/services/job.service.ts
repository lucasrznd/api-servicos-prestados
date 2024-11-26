import IJob from "../interfaces/IJob";
import JobRepository from "../repositories/job.repository";
import formatCurrency from "../utils/currency";
import { resp, respM } from "../utils/resp";

class JobService {
    private repository = new JobRepository();

    async findAll() {
        const jobs = await this.repository.findAll();
        return resp(200, jobs);
    }

    async create(job: IJob) {
        if (job.paid === null || job.paid === undefined) {
            job.paid = 0;   
        }

        const createdJob = await this.repository.create(job);
        return resp(200, createdJob);
    }

    async getNotFullyPaid(contractId: number) {
        if (contractId === 0 || Number.isNaN(contractId)) {
            return respM(404, 'Invalid contract id.');
        }

        const jobs = await this.repository.getNotFullyPaid(contractId);

        return resp(200, jobs);
    }
}

export default JobService;