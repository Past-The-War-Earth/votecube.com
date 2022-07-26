import { IVNumberField } from '@airport/airbridge-validate';
import { AirEntityVDescriptor } from '@airport/holding-pattern/lib/to_be_generated/runtime-index';
import { IdeaVDescriptor } from './videa';
import { SituationVDescriptor } from '@sapoto/core/lib/to_be_generated/runtime-index';
import { IdeaRatingVDescriptor } from './videarating';
import { AgreementVDescriptor } from '../agreement/vagreement';
import { ReasonVDescriptor } from './vreason';
export interface SituationIdeaVDescriptor extends AirEntityVDescriptor {
    agreementShareTotal?: number | IVNumberField;
    numberOfAgreements?: number | IVNumberField;
    urgencyTotal?: number | IVNumberField;
    numberOfUrgencyRatings?: number | IVNumberField;
    numberOfReasons?: number | IVNumberField;
    idea?: IdeaVDescriptor;
    situation?: SituationVDescriptor;
    ideaRatings?: IdeaRatingVDescriptor;
    agreements?: AgreementVDescriptor;
    reasons?: ReasonVDescriptor;
}
//# sourceMappingURL=vsituationidea.d.ts.map