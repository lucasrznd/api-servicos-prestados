import { Model } from "sequelize";
import db from "../shared/models/index";
import sequelize from "sequelize";
import Job from "./Job";

class Contract extends Model {
    declare id: number;
    declare terms: string;
    declare clientId: number;
    declare contractorId: number;
    declare operationDate: Date;
    declare status: string;
}

Contract.init({
    id: {
        type: sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    terms: {
        type: sequelize.STRING,
        allowNull: false
    },
    clientId: {
        type: sequelize.INTEGER,
        references: {
            model: 'profile',
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
    },
    contractorId: {
        type: sequelize.INTEGER,
        references: {
            model: 'profile',
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
    },
    operationDate: {
        type: sequelize.DATE,
        allowNull: false
    },
    status: {
        type: sequelize.STRING,
        allowNull: false
    }
}, {
    sequelize: db,
    tableName: 'contract',
    underscored: true,
    timestamps: false
});

Job.belongsTo(Contract, {
    foreignKey: 'contractId',
    as: 'contract'
});

Contract.hasMany(Job, {
    foreignKey: 'contractId'
});

export default Contract;