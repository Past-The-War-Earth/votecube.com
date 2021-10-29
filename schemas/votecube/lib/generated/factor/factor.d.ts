import { IRepositoryEntity } from '@airport/holding-pattern';
import { IFactorPosition } from './position/factorposition';
export interface IFactor extends IRepositoryEntity {
    name?: string;
    factorPositions?: IFactorPosition[];
}
//# sourceMappingURL=factor.d.ts.map