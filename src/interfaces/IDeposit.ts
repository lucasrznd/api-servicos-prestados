interface IDeposit {
    id?: number;
    clientId: number;
    operationDate: Date;
    depositValue: number;
}

export default IDeposit;