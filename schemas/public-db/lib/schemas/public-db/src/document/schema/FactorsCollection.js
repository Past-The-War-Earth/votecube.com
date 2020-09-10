"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RootCollection_1 = require("./RootCollection");
class FactorsCollection extends RootCollection_1.RootCollection {
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
exports.FactorsCollection = FactorsCollection;
//# sourceMappingURL=FactorsCollection.js.map