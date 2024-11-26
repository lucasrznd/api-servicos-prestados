import { ModelStatic } from "sequelize";
import Contract from "../models/Contract";
import IContract from "../interfaces/IContract";
import Profile from "../models/Profile";
import { Op } from "sequelize";

class ContractRepository {
    private model: ModelStatic<Contract> = Contract;

    async findAll() {
        return await this.model.findAll();
    }

    async create(contract: IContract) {
        const createdContract = await this.model.create({ ...contract });
        return createdContract;
    }

    async listByProfile(profileId: number) {
        return await Contract.findAll({
            where: {
                [Op.or]: [
                    { clientId: profileId },
                    { contractorId: profileId },
                ],
            },
            include: [
                {
                    model: Profile,
                    as: 'client',
                },
                {
                    model: Profile,
                    as: 'contractor',
                },
            ],
        });
    }
}

export default ContractRepository;