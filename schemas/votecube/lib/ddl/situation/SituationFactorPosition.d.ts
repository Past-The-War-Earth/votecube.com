import { RepositoryEntity } from '@airport/holding-pattern';
import { Factor, Position } from '../ddl';
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
    factor: Factor;
    position: Position;
}
//# sourceMappingURL=SituationFactorPosition.d.ts.map