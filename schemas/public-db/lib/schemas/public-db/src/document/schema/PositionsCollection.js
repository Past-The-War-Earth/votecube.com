"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RootCollection_1 = require("./RootCollection");
class PositionsCollection extends RootCollection_1.RootCollection {
    constructor(schema) {
        super('positions', schema);
    }
    positionPolls(keyOrReference) {
        return this.child(keyOrReference, 'positionPolls');
    }
}
exports.PositionsCollection = PositionsCollection;
//# sourceMappingURL=PositionsCollection.js.map