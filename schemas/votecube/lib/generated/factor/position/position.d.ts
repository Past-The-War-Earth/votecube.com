import { IRepositoryEntity } from '@airport/holding-pattern';
import { IFactorPosition } from './factorposition';
export interface IPosition extends IRepositoryEntity {
    name?: string;
    factorPositions?: IFactorPosition[];
}
//# sourceMappingURL=position.d.ts.map