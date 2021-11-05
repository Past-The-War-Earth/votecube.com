import { IRepositoryEntity } from '@airport/holding-pattern';
import { ISituation } from '../situation/situation';
import { ISolutionFactor } from './solutionfactor';
export interface ISolution extends IRepositoryEntity {
    situation?: ISituation;
    factors?: ISolutionFactor;
}
//# sourceMappingURL=solution.d.ts.map