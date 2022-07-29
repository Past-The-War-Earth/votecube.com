import { IVBooleanField } from '@airport/airbridge-validate';
import { AirEntityVDescriptor } from '@airport/holding-pattern/lib/to_be_generated/runtime-index';
import { IdeaVDescriptor } from '../idea/videa';
import { Idea } from '../../ddl/idea/Idea';
import { ReasonVDescriptor } from './vreason';
import { Reason } from '../../ddl/reason/Reason';
import { ReasonCubeDisplayVDescriptor } from './vreasoncubedisplay';
import { ReasonCubeDisplay } from '../../ddl/reason/ReasonCubeDisplay';
export interface IdeaReasonVDescriptor<T> extends AirEntityVDescriptor<T> {
    isPositiveOutcome?: boolean | IVBooleanField;
    idea?: IdeaVDescriptor<Idea>;
    reason?: ReasonVDescriptor<Reason>;
    reasonCubeDisplay?: ReasonCubeDisplayVDescriptor<ReasonCubeDisplay>;
}
//# sourceMappingURL=videareason.d.ts.map