import { IObjectStore } from './ObjectStore';
export interface ITransaction {
    with<T>(storeName: string): IObjectStore<T>;
}
export declare class Transaction implements ITransaction {
    trans: IDBTransaction;
    constructor(trans: IDBTransaction);
    with<T>(storeName: string): IObjectStore<T>;
    commit(): void;
}
//# sourceMappingURL=Transaction.d.ts.map