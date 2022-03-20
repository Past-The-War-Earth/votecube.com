import { RepositoryEntity } from '@airport/holding-pattern';
import { Outcome } from './Outcome';
import { IdeaLabel } from './IdeaLabel';
import { IdeaSituation } from './IdeaSituation';
export declare class Idea extends RepositoryEntity {
    name: string;
    outcomeA: Outcome;
    outcomeB: Outcome;
    children: Idea[];
    ideaLabels: IdeaLabel[];
    ideaSituations: IdeaSituation[];
}
//# sourceMappingURL=Idea.d.ts.map