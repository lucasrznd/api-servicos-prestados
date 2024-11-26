import IContract from "../interfaces/IContract";
import ContractRepository from "../repositories/contract.repository";
import { resp } from "../utils/resp";

class ContractService {
    private repository = new ContractRepository();

    async findAll() {
        const contracts = await this.repository.findAll();
        return resp(200, contracts);
    }

    async create(contract: IContract) {
        const createdContract = await this.repository.create(contract);
        return resp(200, createdContract);
    }

    async listByProfile(profileId: number) {
        const result = await this.repository.listByProfile(profileId);
        return resp(200, result);
    }
}

export default ContractService;