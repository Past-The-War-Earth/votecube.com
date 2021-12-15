import { RepositoryEntity } from '@airport/holding-pattern';
import { ForumThread } from '@votecube/forum/lib/server';
import { Solution } from '../solution/Solution';
import { Outcome } from './Outcome';
import { SituationFactorPosition } from './SituationFactorPosition';
import { SituationLabel } from './SituationLabel';
export declare class Situation extends RepositoryEntity {
    name: string;
    outcomeA: Outcome;
    outcomeB: Outcome;
    thread: ForumThread;
    children: Situation[];
    situationLabels: SituationLabel[];
    situationFactorPositions: SituationFactorPosition[];
    solutions: Solution[];
}
//# sourceMappingURL=Situation.d.ts.map