import { IRepositoryEntity } from '@airport/holding-pattern';
import { ICategory } from '../category';
import { IOutcome } from './outcome';
import { ISituationFactorPosition } from './situationfactorposition';
import { ISolution } from '../solution/solution';
export interface ISituation extends IRepositoryEntity {
    name?: string;
    category?: ICategory;
    parent?: ISituation;
    outcomeA?: IOutcome;
    outcomeB?: IOutcome;
    children?: ISituation[];
    situationFactorPositions?: ISituationFactorPosition[];
    solutions?: ISolution[];
}
//# sourceMappingURL=situation.d.ts.map