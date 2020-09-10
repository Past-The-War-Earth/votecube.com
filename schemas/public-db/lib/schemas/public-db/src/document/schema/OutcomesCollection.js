"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RootCollection_1 = require("./RootCollection");
class OutcomesCollection extends RootCollection_1.RootCollection {
    constructor(schema) {
        super('outcomes', schema);
    }
    outcomePolls(keyOrReference) {
        return this.child(keyOrReference, 'outcomePolls');
    }
}
exports.OutcomesCollection = OutcomesCollection;
//# sourceMappingURL=OutcomesCollection.js.map