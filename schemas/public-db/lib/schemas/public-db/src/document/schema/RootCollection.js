"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Collection_1 = require("./Collection");
class RootCollection extends Collection_1.Collection {
    constructor(name, schema) {
        super(name);
        this.name = name;
        this.schema = schema;
        this.reference = schema.db.collection(name);
    }
}
exports.RootCollection = RootCollection;
//# sourceMappingURL=RootCollection.js.map