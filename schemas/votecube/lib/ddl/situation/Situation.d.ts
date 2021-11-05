import { RepositoryEntity } from '@airport/holding-pattern';
import { Category } from '../Category';
import { Solution } from '../solution/Solution';
import { Outcome } from './Outcome';
import { SituationFactorPosition } from './SituationFactorPosition';
export declare class Situation extends RepositoryEntity {
    name: string;
    category: Category;
    parent: Situation;
    outcomeA: Outcome;
    outcomeB: Outcome;
    children: Situation[];
    situationFactorPositions: SituationFactorPosition[];
    solutions: Solution[];
}
//# sourceMappingURL=Situation.d.ts.map