"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RootCollection_1 = require("./RootCollection");
class UsersCollection extends RootCollection_1.RootCollection {
    constructor(schema) {
        super('users', schema);
    }
    creds(keyOrReference) {
        return this.child(keyOrReference, 'creds');
    }
}
exports.UsersCollection = UsersCollection;
//# sourceMappingURL=UsersCollection.js.map