import { IPoll, IVote, Poll_Id } from '@votecube/ecclesia';
export interface IVoteManager {
    getVoteForPoll(username: string, passwordHash: string, pollId: Poll_Id): Promise<IVote>;
    saveVote(poll: IPoll): Promise<void>;
}
export declare class VoteManager implements IVoteManager {
    getVoteForPoll(username: string, passwordHash: string, pollId: Poll_Id): Promise<IVote>;
    saveVote(poll: IPoll): Promise<void>;
}
//# sourceMappingURL=VoteManager.d.ts.map