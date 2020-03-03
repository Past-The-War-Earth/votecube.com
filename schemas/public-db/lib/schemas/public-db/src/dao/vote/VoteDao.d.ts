import { IVote, Poll_Id } from '@votecube/model';
export interface IVoteDao {
    findMyVoteForPoll(pollId: Poll_Id): Promise<IVote>;
}
export declare class VoteDao implements IVoteDao {
    findMyVoteForPoll(pollId: Poll_Id): Promise<IVote>;
    private getDummy;
}
