import { IRepositoryEntity } from '@airport/holding-pattern';
import { IIdea } from './idea';
import { IFactor } from '../factor/factor';
import { IPosition } from '../factor/position';
export interface IIdeaFactorPosition extends IRepositoryEntity {
    axis?: string;
    dir?: number;
    factorNumber?: number;
    blue?: number;
    green?: number;
    red?: number;
    outcomeOrdinal?: string;
    idea?: IIdea;
    factor?: IFactor;
    position?: IPosition;
}
//# sourceMappingURL=ideafactorposition.d.ts.map