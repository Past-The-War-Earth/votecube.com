"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RootCollection_1 = require("./RootCollection");
class PollDraftsCollection extends RootCollection_1.RootCollection {
    constructor(schema) {
        super('pollDrafts', schema);
    }
    pollRevisionListings(keyOrReference) {
        return this.child(keyOrReference, 'pollRevisionListings');
    }
    pollRevisions(keyOrReference) {
        return this.child(keyOrReference, 'pollRevisions');
    }
}
exports.PollDraftsCollection = PollDraftsCollection;
//# sourceMappingURL=PollDraftsCollection.js.map