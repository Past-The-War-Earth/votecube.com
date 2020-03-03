import { VoteFactor_Id, VoteFactor_Value } from '../../types/vote/VoteFactor';
import { PollRevisionFactorPosition } from '../poll/revision/PollRevisionFactorPosition';
import { VoteFactorType } from './VoteFactorType';
import { VoteRevision } from './VoteRevision';
export declare class VoteFactor {
    id: VoteFactor_Id;
    voteRevision: VoteRevision;
    share: VoteFactor_Value;
    pollFactorPos: PollRevisionFactorPosition;
    type: VoteFactorType;
}
