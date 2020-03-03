import { RootCollection } from './RootCollection';
export class FactorsCollection extends RootCollection {
    constructor(schema) {
        super('factors', schema);
    }
    factorPolls(keyOrReference) {
        return this.child(keyOrReference, 'factorPolls');
    }
    factorPositions(keyOrReference) {
        return this.child(keyOrReference, 'factorPositions');
    }
}
//# sourceMappingURL=FactorsCollection.js.map