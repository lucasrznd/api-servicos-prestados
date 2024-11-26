import { ModelStatic } from "sequelize";
import Deposit from "../models/Deposit";
import IDeposit from "../interfaces/IDeposit";
import Profile from "../models/Profile";

class DepositRepository {
    private model: ModelStatic<Deposit> = Deposit;

    async findAll() {
        return await this.model.findAll({
            include: { model: Profile, as: 'client', attributes: ['id', 'firstName', 'lastName'] },
            attributes: { exclude: ['clientId'] }
        });
    }

    async create(deposit: IDeposit) {
        const createdDeposit = await this.model.create({ ...deposit });
        return createdDeposit;
    }
}

export default DepositRepository;