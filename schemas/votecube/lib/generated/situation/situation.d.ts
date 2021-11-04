import { IRepositoryEntity } from '@airport/holding-pattern';
import { ICategory } from '../category';
import { IOutcome } from './outcome';
import { ISituationFactorPosition } from './situationfactorposition';
export interface ISituation extends IRepositoryEntity {
    name?: string;
    category?: ICategory;
    parent?: ISituation;
    outcomeA?: IOutcome;
    outcomeB?: IOutcome;
    situationFactorPositions?: ISituationFactorPosition[];
    children?: ISituation[];
}
//# sourceMappingURL=situation.d.ts.map