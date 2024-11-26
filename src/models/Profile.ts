import { Model } from "sequelize";
import db from "../shared/models/index";
import sequelize from "sequelize";
import Contract from "./Contract";
import Deposit from "./Deposit";

class Profile extends Model {
    declare id: number;
    declare firstName: string;
    declare lastName: string;
    declare profession: string;
    declare balance: string;
    declare type: string;
}

Profile.init({
    id: {
        type: sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    firstName: {
        type: sequelize.STRING,
        allowNull: false
    },
    lastName: {
        type: sequelize.STRING,
        allowNull: false
    },
    profession: {
        type: sequelize.STRING,
        allowNull: false
    },
    balance: {
        type: sequelize.DOUBLE,
        allowNull: false
    },
    type: {
        type: sequelize.STRING,
        allowNull: false
    }
}, {
    sequelize: db,
    tableName: 'profile',
    underscored: true,
    timestamps: false
});

Contract.belongsTo(Profile, {
    foreignKey: 'clientId',
    as: 'client'
});

Contract.belongsTo(Profile, {
    foreignKey: 'contractorId',
    as: 'contractor'
});

Deposit.belongsTo(Profile, {
    foreignKey: 'clientId',
    as: 'client'
});

Profile.hasMany(Contract, {
    foreignKey: 'clientId',
    as: 'Client'
});

Profile.hasMany(Contract, {
    foreignKey: 'contractorId',
    as: 'Contractor'
})

Profile.hasMany(Deposit, {
    foreignKey: 'clientId',
    as: 'client'
})

export default Profile;