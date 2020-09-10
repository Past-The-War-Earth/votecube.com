"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Collection_1 = require("./Collection");
class ChildCollection extends Collection_1.Collection {
    constructor(name, parent, parentKeyOrReference) {
        super(name);
        this.name = name;
        this.parent = parent;
        if (typeof parentKeyOrReference === 'string') {
            this.reference = parent.reference.doc(parentKeyOrReference).collection(name);
        }
        else {
            this.reference = parentKeyOrReference.collection(name);
        }
    }
}
exports.ChildCollection = ChildCollection;
//# sourceMappingURL=ChildCollection.js.map