import { ChildCollection } from './ChildCollection';
export class Collection {
    constructor(name) {
        this.name = name;
    }
    child(keyOrReference, name, ChildCollectionConstructor) {
        if (ChildCollectionConstructor) {
            return new ChildCollectionConstructor(name, this, keyOrReference);
        }
        return new ChildCollection(name, this, keyOrReference);
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
//# sourceMappingURL=Collection.js.map