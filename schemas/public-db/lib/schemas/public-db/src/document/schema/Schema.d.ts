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
    get factors(): IFactorsCollection;
    get outcomes(): IOutcomesCollection;
    get pollDrafts(): IPollDraftsCollection;
    get positions(): IPositionsCollection;
    get users(): IUsersCollection;
}
