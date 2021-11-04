import { IRepositoryEntity } from '@airport/holding-pattern';
import { ISituation } from './situation';
import { IFactor } from '../factor/factor';
import { IPosition } from '../factor/position';
export interface ISituationFactorPosition extends IRepositoryEntity {
    axis?: string;
    dir?: number;
    factorNumber?: number;
    blue?: number;
    green?: number;
    red?: number;
    outcomeOrdinal?: string;
    situation?: ISituation;
    factor?: IFactor;
    position?: IPosition;
}
//# sourceMappingURL=situationfactorposition.d.ts.map