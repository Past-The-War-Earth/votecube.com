import { IVNumberField } from '@airport/airbridge-validate';
import { AirEntityVDescriptor } from '@airport/holding-pattern/lib/to_be_generated/runtime-index';
import { SituationIdeaVDescriptor } from '../idea/vsituationidea';
import { IdeaVDescriptor } from '../idea/videa';
import { AgreementReasonVDescriptor } from './vagreementreason';
export interface AgreementVDescriptor extends AirEntityVDescriptor {
    shareTotal?: number | IVNumberField;
    situationIdea?: SituationIdeaVDescriptor;
    idea?: IdeaVDescriptor;
    agreementReasons?: AgreementReasonVDescriptor;
}
//# sourceMappingURL=vagreement.d.ts.map