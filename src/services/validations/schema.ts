import joi from "joi";

const deposit = joi.object({
    clientId: joi.number().required(),
    operationDate: joi.date().optional(),
    depositValue: joi.number().required()
});

export = { deposit };