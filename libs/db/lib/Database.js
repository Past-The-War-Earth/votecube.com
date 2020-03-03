import { Transaction } from './Transaction';
export class Database {
    constructor(db) {
        this.db = db;
    }
    async startTrans(objectStores, type = 'readwrite') {
        // const db = await DI.get(INDEXED_DB)
        return new Transaction(this.db.transaction(objectStores, type));
    }
}
// DI.set(INDEXED_DB, IndexedDB)
//# sourceMappingURL=Database.js.map