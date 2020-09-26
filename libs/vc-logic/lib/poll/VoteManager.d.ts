import { IVote, Poll_Id } from '@votecube/ecclesia';
export interface IVoteManager {
    getVoteForPoll(username: string, passwordHash: string, pollId: Poll_Id): Promise<IVote>;
}
export declare class VoteManager implements IVoteManager {
    getVoteForPoll(username: string, passwordHash: string, pollId: Poll_Id): Promise<IVote>;
}
//# sourceMappingURL=VoteManager.d.ts.map