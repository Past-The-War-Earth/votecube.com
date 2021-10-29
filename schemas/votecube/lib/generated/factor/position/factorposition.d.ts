import { IRepositoryEntity } from '@airport/holding-pattern';
import { IFactor } from '../factor';
import { IPosition } from './position';
export interface IFactorPosition extends IRepositoryEntity {
    factor?: IFactor;
    position?: IPosition;
}
//# sourceMappingURL=factorposition.d.ts.map