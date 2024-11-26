import IProfile from "../interfaces/IProfile";
import ProfileRepository from "../repositories/profile.repository";
import { resp } from "../utils/resp";

class ProfileService {
    private repository = new ProfileRepository();

    async findAll(type: string) {
        const profiles = await this.repository.findAll(type);
        return resp(200, profiles);
    }

    async create(profile: IProfile) {
        const createdProfile = await this.repository.create(profile);
        return resp(200, createdProfile);
    }

    async getBalance(id: number) {
        const balance = await this.repository.getBalance(id);
        return resp(200, balance);
    }
}

export default ProfileService;