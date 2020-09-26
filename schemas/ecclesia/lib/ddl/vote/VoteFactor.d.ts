import { VoteFactor_Id, VoteFactor_Value } from '../../types/vote/VoteFactor';
import { PollRevisionFactorPosition } from '../poll/revision/PollRevisionFactorPosition';
import { VoteFactorType } from './VoteFactorType';
import { VoteVersion } from './VoteVersion';
export declare class VoteFactor {
    id: VoteFactor_Id;
    voteRevision: VoteVersion;
    share: VoteFactor_Value;
    pollFactorPos: PollRevisionFactorPosition;
    type: VoteFactorType;
}
//# sourceMappingURL=VoteFactor.d.ts.map