import { DI } from '@airport/di';
import { SCHEMA } from '../../tokens';
import { FactorsCollection } from './FactorsCollection';
import { OutcomesCollection } from './OutcomesCollection';
import { PollDraftsCollection } from './PollDraftsCollection';
import { PositionsCollection } from './PositionsCollection';
import { UsersCollection } from './UsersCollection';
export class Schema {
    constructor() {
        this.db = window.db;
    }
    get factors() {
        return new FactorsCollection(this);
    }
    get outcomes() {
        return new OutcomesCollection(this);
    }
    get pollDrafts() {
        return new PollDraftsCollection(this);
    }
    get positions() {
        return new PositionsCollection(this);
    }
    get users() {
        return new UsersCollection(this);
    }
}
DI.set(SCHEMA, Schema);
//# sourceMappingURL=Schema.js.map