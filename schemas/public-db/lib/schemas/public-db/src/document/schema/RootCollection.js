import { Collection } from './Collection';
export class RootCollection extends Collection {
    constructor(name, schema) {
        super(name);
        this.name = name;
        this.schema = schema;
        this.reference = schema.db.collection(name);
    }
}
//# sourceMappingURL=RootCollection.js.map