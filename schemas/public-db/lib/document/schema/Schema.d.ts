import { IVCFirestore } from './DocRef';
import { IFactorsCollection } from './FactorsCollection';
import { IOutcomesCollection } from './OutcomesCollection';
import { IPollDraftsCollection } from './PollDraftsCollection';
import { IPositionsCollection } from './PositionsCollection';
import { IUsersCollection } from './UsersCollection';
export interface IVotecubeSchema {
    db: IVCFirestore;
    factors: IFactorsCollection;
    outcomes: IOutcomesCollection;
    pollDrafts: IPollDraftsCollection;
    positions: IPositionsCollection;
    users: IUsersCollection;
}
export declare class Schema implements IVotecubeSchema {
    db: IVCFirestore;
    constructor();
    readonly factors: IFactorsCollection;
    readonly outcomes: IOutcomesCollection;
    readonly pollDrafts: IPollDraftsCollection;
    readonly positions: IPositionsCollection;
    readonly users: IUsersCollection;
}
