import { Model } from "sequelize";
import db from "../shared/models/index";
import sequelize from "sequelize";

class Job extends Model {
    declare id: number;
    declare contractId: number;
    declare description: string;
    declare operationDate: Date;
    declare paymentDate: Date;
    declare price: number;
    declare paid: number;
}

Job.init({
    id: {
        type: sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    contractId: {
        type: sequelize.INTEGER,
        references: {
            model: 'contract',
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false
    },
    description: {
        type: sequelize.STRING
    },
    operationDate: {
        type: sequelize.DATE,
        allowNull: false
    },
    paymentDate: {
        type: sequelize.DATE,
    },
    price: {
        type: sequelize.DOUBLE,
        allowNull: false
    },
    paid: {
        type: sequelize.SMALLINT
    }
}, {
    sequelize: db,
    tableName: 'job',
    underscored: true,
    timestamps: false
});

export default Job;