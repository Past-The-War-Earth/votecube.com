import { IRepositoryEntity } from '@airport/holding-pattern';
import { IOutcome } from './outcome';
import { IIdeaLabel } from './idealabel';
import { IIdeaSituation } from './ideasituation';
export interface IIdea extends IRepositoryEntity {
    name?: string;
    outcomeA?: IOutcome;
    outcomeB?: IOutcome;
    children?: IIdea[];
    ideaLabels?: IIdeaLabel[];
    ideaSituations?: IIdeaSituation[];
}
//# sourceMappingURL=idea.d.ts.map