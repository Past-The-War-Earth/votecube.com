import { IVNumberField } from '@airport/airbridge-validate';
import { AirEntityVDescriptor } from '@airport/holding-pattern/lib/to_be_generated/runtime-index';
import { SituationIdeaVDescriptor } from '../idea/vsituationidea';
import { SituationIdea } from '../../ddl/idea/SituationIdea';
import { IdeaVDescriptor } from '../idea/videa';
import { Idea } from '../../ddl/idea/Idea';
import { AgreementReasonVDescriptor } from './vagreementreason';
import { AgreementReason } from '../../ddl/agreement/AgreementReason';
export interface AgreementVDescriptor<T> extends AirEntityVDescriptor<T> {
    shareTotal?: number | IVNumberField;
    situationIdea?: SituationIdeaVDescriptor<SituationIdea>;
    idea?: IdeaVDescriptor<Idea>;
    agreementReasons?: AgreementReasonVDescriptor<AgreementReason>;
}
//# sourceMappingURL=vagreement.d.ts.map