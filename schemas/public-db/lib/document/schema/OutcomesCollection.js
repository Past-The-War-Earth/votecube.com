import { RootCollection } from './RootCollection';
export class OutcomesCollection extends RootCollection {
    constructor(schema) {
        super('outcomes', schema);
    }
    outcomePolls(keyOrReference) {
        return this.child(keyOrReference, 'outcomePolls');
    }
}
//# sourceMappingURL=OutcomesCollection.js.map