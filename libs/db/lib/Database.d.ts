import { ITransaction } from './Transaction';
export interface IDatabase {
    startTrans(objectStores: string[], type?: 'readonly' | 'readwrite'): Promise<ITransaction>;
}
export declare class Database implements IDatabase {
    db: IDBDatabase;
    constructor(db: IDBDatabase);
    startTrans(objectStores: string[], type?: 'readonly' | 'readwrite'): Promise<ITransaction>;
}
//# sourceMappingURL=Database.d.ts.map