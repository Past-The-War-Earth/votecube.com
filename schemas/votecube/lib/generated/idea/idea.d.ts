import { IRepositoryEntity } from '@airport/holding-pattern';
import { IOutcome } from './outcome';
import { IForumThread } from '@votecube/forum';
import { IIdeaLabel } from './idealabel';
import { IIdeaFactorPosition } from './ideafactorposition';
import { IAgreement } from '../agreement/agreement';
export interface IIdea extends IRepositoryEntity {
    name?: string;
    outcomeA?: IOutcome;
    outcomeB?: IOutcome;
    thread?: IForumThread;
    children?: IIdea[];
    ideaLabels?: IIdeaLabel[];
    ideaFactorPositions?: IIdeaFactorPosition[];
    agreements?: IAgreement[];
}
//# sourceMappingURL=idea.d.ts.map