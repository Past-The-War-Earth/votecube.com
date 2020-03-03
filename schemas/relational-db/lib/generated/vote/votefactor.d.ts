import { IVoteRevision } from './voterevision';
import { IPollRevisionFactorPosition } from '../poll/revision/pollrevisionfactorposition';
import { IVoteFactorType } from './votefactortype';
export interface IVoteFactor {
    id: number;
    share?: string;
    voteRevision?: IVoteRevision;
    pollFactorPos?: IPollRevisionFactorPosition;
    type?: IVoteFactorType;
}
