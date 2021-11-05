import { IRepositoryEntity } from '@airport/holding-pattern';
import { ISolution } from './solution';
import { ISituationFactorPosition } from '../situation/situationfactorposition';
export interface ISolutionFactor extends IRepositoryEntity {
    axis?: string;
    share?: number;
    solution?: ISolution;
    situationFactorPosition?: ISituationFactorPosition;
}
//# sourceMappingURL=solutionfactor.d.ts.map