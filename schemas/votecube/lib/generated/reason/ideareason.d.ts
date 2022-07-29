import { IAirEntity } from '@airport/holding-pattern';
import { IIdea } from '../idea/idea';
import { IReason } from './reason';
import { IReasonCubeDisplay } from './reasoncubedisplay';
export interface IIdeaReason extends IAirEntity {
    isPositiveOutcome?: boolean;
    idea?: IIdea;
    reason?: IReason;
    reasonCubeDisplay?: IReasonCubeDisplay;
}
//# sourceMappingURL=ideareason.d.ts.map