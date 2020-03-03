import { IVote, Poll_Key } from '@votecube/model';
export interface IVoteDao {
    findMyVoteForPoll(pollKey: Poll_Key): Promise<IVote>;
}
export declare class VoteDao implements IVoteDao {
    findMyVoteForPoll(pollKey: Poll_Key): Promise<IVote>;
    private getDummy;
}
