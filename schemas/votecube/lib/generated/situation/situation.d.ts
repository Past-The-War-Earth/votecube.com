import { IRepositoryEntity } from '@airport/holding-pattern';
import { IOutcome } from './outcome';
import { IForumThread } from '@votecube/forum';
import { ISituationLabel } from './situationlabel';
import { ISituationFactorPosition } from './situationfactorposition';
import { ISolution } from '../solution/solution';
export interface ISituation extends IRepositoryEntity {
    name?: string;
    outcomeA?: IOutcome;
    outcomeB?: IOutcome;
    thread?: IForumThread;
    children?: ISituation[];
    situationLabels?: ISituationLabel[];
    situationFactorPositions?: ISituationFactorPosition[];
    solutions?: ISolution[];
}
//# sourceMappingURL=situation.d.ts.map