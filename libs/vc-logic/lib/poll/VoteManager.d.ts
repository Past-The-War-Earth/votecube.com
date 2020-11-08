import { IPoll, Poll_Id } from '@votecube/ecclesia';
import { IVote as UIVote } from '@votecube/model';
export interface IVoteManager {
    getVoteForPoll(username: string, passwordHash: string, pollId: Poll_Id): Promise<UIVote>;
    saveVote(poll: IPoll): Promise<void>;
}
export declare class VoteManager implements IVoteManager {
    getVoteForPoll(username: string, passwordHash: string, pollId: Poll_Id): Promise<UIVote>;
    saveVote(poll: IPoll): Promise<void>;
    private getStubVote;
    private dbToUi;
    private uiToDb;
}
//# sourceMappingURL=VoteManager.d.ts.map