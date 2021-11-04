import { RepositoryEntity } from '@airport/holding-pattern';
import { Category } from '../Category';
import { Outcome } from './Outcome';
import { SituationFactorPosition } from './SituationFactorPosition';
export declare class Situation extends RepositoryEntity {
    name: string;
    category: Category;
    parent: Situation;
    outcomeA: Outcome;
    outcomeB: Outcome;
    situationFactorPositions: SituationFactorPosition[];
    children: Situation[];
}
//# sourceMappingURL=Situation.d.ts.map