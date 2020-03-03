import { RootCollection } from './RootCollection';
export class PollDraftsCollection extends RootCollection {
    constructor(schema) {
        super('pollDrafts', schema);
    }
    pollVariationListings(keyOrReference) {
        return this.child(keyOrReference, 'pollVariationListings');
    }
    pollVariations(keyOrReference) {
        return this.child(keyOrReference, 'pollVariations');
    }
}
//# sourceMappingURL=PollDraftsCollection.js.map