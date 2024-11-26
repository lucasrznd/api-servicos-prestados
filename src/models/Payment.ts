import { Model } from "sequelize";
import db from "../shared/models/index";
import sequelize from "sequelize";
import Job from "./Job";

class Payment extends Model {
    declare id: number;
    declare jobId: number;
    declare operationDate: Date;
    declare paymentValue: number;
}

Payment.init({
    id: {
        type: sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    jobId: {
        type: sequelize.INTEGER,
        references: {
            model: 'job',
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
    paymentValue: {
        type: sequelize.DOUBLE,
        allowNull: false
    }
}, {
    sequelize: db,
    tableName: 'payment',
    underscored: true,
    timestamps: false
});

Payment.belongsTo(Job, {
    foreignKey: 'jobId',
    as: 'job'
});

Job.hasMany(Payment, {
    foreignKey: 'jobId',
    as: 'payments'
});

export default Payment;