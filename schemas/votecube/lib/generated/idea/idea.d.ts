import { IRepositoryEntity } from '@airport/holding-pattern';
import { IOutcome } from './outcome';
import { IForumThread } from '@votecube/forum';
import { IIdeaLabel } from './idealabel';
import { IReason } from './reason';
import { IAgreement } from '../agreement/agreement';
export interface IIdea extends IRepositoryEntity {
    name?: string;
    outcomeA?: IOutcome;
    outcomeB?: IOutcome;
    thread?: IForumThread;
    children?: IIdea[];
    ideaLabels?: IIdeaLabel[];
    reasons?: IReason[];
    agreements?: IAgreement[];
}
//# sourceMappingURL=idea.d.ts.map