import { IVNumberField, IVStringField } from '@airport/airbridge-validate';
import { AirEntityVDescriptor } from '@airport/holding-pattern/lib/to_be_generated/runtime-index';
import { IdeaRatingVDescriptor } from './videarating';
import { AgreementVDescriptor } from '../agreement/vagreement';
import { ReasonVDescriptor } from './vreason';
import { IdeaLabelVDescriptor } from './videalabel';
import { SituationIdeaVDescriptor } from './vsituationidea';
import { IdeaTopicVDescriptor } from './videatopic';
export interface IdeaVDescriptor extends AirEntityVDescriptor {
    name?: string | IVStringField;
    agreementShareTotal?: number | IVNumberField;
    numberOfAgreements?: number | IVNumberField;
    urgencyTotal?: number | IVNumberField;
    numberOfUrgencyRatings?: number | IVNumberField;
    numberOfReasons?: number | IVNumberField;
    parent?: IdeaVDescriptor;
    children?: IdeaVDescriptor;
    ideaRatings?: IdeaRatingVDescriptor;
    agreements?: AgreementVDescriptor;
    reasons?: ReasonVDescriptor;
    ideaLabels?: IdeaLabelVDescriptor;
    situationIdeas?: SituationIdeaVDescriptor;
    ideaTopics?: IdeaTopicVDescriptor;
}
//# sourceMappingURL=videa.d.ts.map