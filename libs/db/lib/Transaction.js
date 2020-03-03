import { ObjectStore } from './ObjectStore';
export class Transaction {
    constructor(trans) {
        this.trans = trans;
    }
    with(storeName) {
        return new ObjectStore(this.trans.objectStore(storeName));
    }
    commit() {
    }
}
//# sourceMappingURL=Transaction.js.map