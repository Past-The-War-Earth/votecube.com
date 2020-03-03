import { RootCollection } from './RootCollection';
export class PositionsCollection extends RootCollection {
    constructor(schema) {
        super('positions', schema);
    }
    positionPolls(keyOrReference) {
        return this.child(keyOrReference, 'positionPolls');
    }
}
//# sourceMappingURL=PositionsCollection.js.map