import { RepositoryEntity } from '@airport/holding-pattern';
import { Solution } from '../solution/Solution';
import { Outcome } from './Outcome';
import { SituationFactorPosition } from './SituationFactorPosition';
import { SituationLabel } from './SituationLabel';
export declare class Situation extends RepositoryEntity {
    name: string;
    parent: Situation;
    outcomeA: Outcome;
    outcomeB: Outcome;
    children: Situation[];
    situationLabels: SituationLabel[];
    situationFactorPositions: SituationFactorPosition[];
    solutions: Solution[];
}
//# sourceMappingURL=Situation.d.ts.map