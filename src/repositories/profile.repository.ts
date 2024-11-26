import { ModelStatic } from "sequelize";
import Profile from "../models/Profile";
import IProfile from "../interfaces/IProfile";

class ProfileRepository {
    private model: ModelStatic<Profile> = Profile;

    async findAll(type: string) {
        return type === '' || type === 'undefined' || type === undefined ? await this.model.findAll()
            : await this.model.findAll({
                where: {
                    type: type,
                }
            });
    }

    async create(profile: IProfile) {
        const createdProifle = await this.model.create({ ...profile });
        return createdProifle;
    }

    async getBalance(id: number) {
        return this.model.findByPk(id, {
            attributes: ['balance']
        });
    }
}

export default ProfileRepository;