interface IJob {
    id?: number;
    contractId: number;
    description: string;
    operationDate: Date;
    paymentDate: Date;
    price: number;
    paid: number;
}

export default IJob;