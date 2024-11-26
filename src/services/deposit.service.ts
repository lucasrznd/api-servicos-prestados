import IDeposit from "../interfaces/IDeposit";
import DepositRepository from "../repositories/deposit.repository";
import { resp, respM } from "../utils/resp";
import schema from "./validations/schema";

class DepositService {
    private repository = new DepositRepository();

    async findAll() {
        const deposits = await this.repository.findAll();
        return resp(200, deposits);
    }

    async create(deposit: IDeposit) {
        deposit.operationDate = new Date(Date.now());

        const { error } = schema.deposit.validate(deposit);
        if (error) return respM(400, error.message);

        if (deposit.depositValue <= 0) return respM(400, "Invalid amount");

        const createdDeposit = await this.repository.create(deposit);
        return resp(201, createdDeposit);
    }
}

export default DepositService;