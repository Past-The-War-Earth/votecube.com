import { RepositoryEntity } from '@airport/holding-pattern';
import { Factor, Position } from '../ddl';
import { SituationIdea } from './SituationIdea';
export declare class Reason extends RepositoryEntity {
    axis: 'x' | 'y' | 'z';
    dir: -1 | 1;
    factorNumber: 1 | 2 | 3;
    blue: number;
    green: number;
    red: number;
    outcomeOrdinal: 'A' | 'B';
    situationIdea: SituationIdea;
    factor: Factor;
    position: Position;
}
//# sourceMappingURL=Reason.d.ts.map