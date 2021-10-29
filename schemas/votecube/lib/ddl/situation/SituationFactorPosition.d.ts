import { RepositoryEntity } from '@airport/holding-pattern';
import { FactorPosition } from '../factor/position/FactorPosition';
import { Situation } from './Situation';
export declare class SituationFactorPosition extends RepositoryEntity {
    axis: 'x' | 'y' | 'z';
    dir: -1 | 1;
    factorNumber: 1 | 2 | 3;
    blue: number;
    green: number;
    red: number;
    outcomeOrdinal: 'A' | 'B';
    situation: Situation;
    factorPosition: FactorPosition;
}
//# sourceMappingURL=SituationFactorPosition.d.ts.map