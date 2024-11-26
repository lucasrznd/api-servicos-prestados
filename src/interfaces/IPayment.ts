interface IPayment {
    id?: number;
    jobId: number;
    operationDate: Date;
    paymentValue: number;
}

export default IPayment;