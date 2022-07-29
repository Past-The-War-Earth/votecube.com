import { IVBooleanField } from '@airport/airbridge-validate';
import { AirEntityVDescriptor } from '@airport/holding-pattern/lib/to_be_generated/runtime-index';
import { SituationIdeaVDescriptor } from '../idea/vsituationidea';
import { SituationIdea } from '../../ddl/idea/SituationIdea';
import { ReasonVDescriptor } from './vreason';
import { Reason } from '../../ddl/reason/Reason';
import { ReasonCubeDisplayVDescriptor } from './vreasoncubedisplay';
import { ReasonCubeDisplay } from '../../ddl/reason/ReasonCubeDisplay';
export interface SituationIdeaReasonVDescriptor<T> extends AirEntityVDescriptor<T> {
    isPositiveOutcome?: boolean | IVBooleanField;
    situationIdea?: SituationIdeaVDescriptor<SituationIdea>;
    reason?: ReasonVDescriptor<Reason>;
    reasonCubeDisplay?: ReasonCubeDisplayVDescriptor<ReasonCubeDisplay>;
}
//# sourceMappingURL=vsituationideareason.d.ts.map