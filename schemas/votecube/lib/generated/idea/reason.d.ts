import { IRepositoryEntity } from '@airport/holding-pattern';
import { ISituationIdea } from './situationidea';
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
    ideaSituation?: ISituationIdea;
    factor?: IFactor;
    position?: IPosition;
}
//# sourceMappingURL=reason.d.ts.map