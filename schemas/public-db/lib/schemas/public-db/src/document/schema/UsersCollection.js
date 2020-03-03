import { RootCollection } from './RootCollection';
export class UsersCollection extends RootCollection {
    constructor(schema) {
        super('users', schema);
    }
    creds(keyOrReference) {
        return this.child(keyOrReference, 'creds');
    }
}
//# sourceMappingURL=UsersCollection.js.map