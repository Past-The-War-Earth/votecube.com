import { IAirEntity } from '@airport/holding-pattern';
import { ISituationIdea } from '../idea/situationidea';
import { IReason } from './reason';
import { IReasonCubeDisplay } from './reasoncubedisplay';
export interface ISituationIdeaReason extends IAirEntity {
    isPositiveOutcome?: boolean;
    situationIdea?: ISituationIdea;
    reason?: IReason;
    reasonCubeDisplay?: IReasonCubeDisplay;
}
//# sourceMappingURL=situationideareason.d.ts.map