import { Model } from "sequelize";
import db from "../shared/models/index";
import sequelize from "sequelize";
import Profile from "./Profile";

class Deposit extends Model {
    declare id: number;
    declare clientId: number;
    declare operationDate: Date;
    declare depositValue: number;
}

Deposit.init({
    id: {
        type: sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    clientId: {
        type: sequelize.INTEGER,
        references: {
            model: 'profile',
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false
    },
    operationDate: {
        type: sequelize.DATE,
        allowNull: false
    },
    depositValue: {
        type: sequelize.DOUBLE,
        allowNull: false
    }
}, {
    sequelize: db,
    tableName: 'deposit',
    underscored: true,
    timestamps: false
});

export default Deposit;