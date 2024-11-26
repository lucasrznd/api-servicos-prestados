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

    async findById(id: number) {
        return await this.model.findByPk(id);
    }

    async create(profile: IProfile) {
        const createdProfile = await this.model.create({ ...profile });
        return createdProfile;
    }

    async updateBalance(profileId: number, newBalance: number) {
        return await this.model.update(
            { balance: newBalance },
            {
                where: {
                    id: profileId
                }
            });
    }

    async getBalance(id: number) {
        return this.model.findByPk(id, {
            attributes: ['balance']
        });
    }
}

export default ProfileRepository;