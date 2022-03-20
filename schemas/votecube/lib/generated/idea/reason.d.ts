import { IRepositoryEntity } from '@airport/holding-pattern';
import { IIdeaSituation } from './ideasituation';
import { IFactor } from '../factor/factor';
import { IPosition } from '../factor/position';
export interface IReason extends IRepositoryEntity {
    axis?: string;
    dir?: number;
    factorNumber?: number;
    blue?: number;
    green?: number;
    red?: number;
    outcomeOrdinal?: string;
    ideaSituation?: IIdeaSituation;
    factor?: IFactor;
    position?: IPosition;
}
//# sourceMappingURL=reason.d.ts.map