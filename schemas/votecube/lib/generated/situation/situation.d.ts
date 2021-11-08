import { IRepositoryEntity } from '@airport/holding-pattern';
import { IOutcome } from './outcome';
import { ISituationLabel } from './situationlabel';
import { ISituationFactorPosition } from './situationfactorposition';
import { ISolution } from '../solution/solution';
export interface ISituation extends IRepositoryEntity {
    name?: string;
    parent?: ISituation;
    outcomeA?: IOutcome;
    outcomeB?: IOutcome;
    children?: ISituation[];
    situationLabels?: ISituationLabel[];
    situationFactorPositions?: ISituationFactorPosition[];
    solutions?: ISolution[];
}
//# sourceMappingURL=situation.d.ts.map