import IDeposit from "../interfaces/IDeposit";
import DepositRepository from "../repositories/deposit.repository";
import ProfileRepository from "../repositories/profile.repository";
import { resp, respM } from "../utils/resp";
import schema from "./validations/schema";

class DepositService {
    private repository = new DepositRepository();
    private profileRepository = new ProfileRepository();

    async findAll() {
        const deposits = await this.repository.findAll();
        return resp(200, deposits);
    }

    async create(deposit: IDeposit) {
        if (deposit.operationDate === null) {
            deposit.operationDate = new Date(Date.now());
        }

        const { error } = schema.deposit.validate(deposit);
        if (error) return respM(400, error.message);

        if (deposit.depositValue <= 0) return respM(400, "Invalid amount");

        var profile = await this.profileRepository.findById(deposit.clientId);
        if (profile === null) {
            return respM(404, 'Profile not found.');
        }
        
        const newBalance = profile.balance + deposit.depositValue;
        this.profileRepository.updateBalance(profile.id, newBalance);

        const createdDeposit = await this.repository.create(deposit);
        return resp(201, createdDeposit);
    }
}

export default DepositService;