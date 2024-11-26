interface IContract {
    id?: number;
    terms: string;
    clientId: number;
    contractorId: number;
    operationDate: Date;
    status: string;
}

export default IContract;