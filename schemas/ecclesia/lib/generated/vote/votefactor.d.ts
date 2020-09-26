import { IVoteVersion } from './voteversion';
import { IPollRevisionFactorPosition } from '../poll/revision/pollrevisionfactorposition';
import { IVoteFactorType } from './votefactortype';
export interface IVoteFactor {
    id: number;
    share?: string;
    voteRevision?: IVoteVersion;
    pollFactorPos?: IPollRevisionFactorPosition;
    type?: IVoteFactorType;
}
//# sourceMappingURL=votefactor.d.ts.map