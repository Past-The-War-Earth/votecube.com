"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ChildCollection_1 = require("./ChildCollection");
class Collection {
    constructor(name) {
        this.name = name;
    }
    child(keyOrReference, name, ChildCollectionConstructor) {
        if (ChildCollectionConstructor) {
            return new ChildCollectionConstructor(name, this, keyOrReference);
        }
        return new ChildCollection_1.ChildCollection(name, this, keyOrReference);
    }
    doc(key) {
        if (key) {
            return this.reference.doc(key);
        }
        else {
            return this.reference.doc();
        }
    }
}
exports.Collection = Collection;
//# sourceMappingURL=Collection.js.map