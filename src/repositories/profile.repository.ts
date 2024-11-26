import { ModelStatic } from "sequelize";
import Profile from "../models/Profile";
import IProfile from "../interfaces/IProfile";

class ProfileRepository {
    private model: ModelStatic<Profile> = Profile;

    async findAll(type: string) {
        return type === '' || null ? await this.model.findAll({
            attributes: { exclude: ['balance'] },
        }) : await this.model.findAll({
            attributes: { exclude: ['balance'] },
            where: {
                type: type,
            }
        });
    }

    async create(profile: IProfile) {
        const createdProifle = await this.model.create({...profile});
        return createdProifle;
    }

    async getBalance(id: number) {
        return this.model.findByPk(id, {
            attributes: ['balance']
        });
    }
}

export default ProfileRepository;