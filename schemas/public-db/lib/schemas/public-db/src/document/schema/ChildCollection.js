import { Collection } from './Collection';
export class ChildCollection extends Collection {
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
//# sourceMappingURL=ChildCollection.js.map