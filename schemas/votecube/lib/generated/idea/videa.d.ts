import { IVNumberField, IVStringField } from '@airport/airbridge-validate';
import { AirEntityVDescriptor } from '@airport/holding-pattern/lib/to_be_generated/runtime-index';
import { Idea } from '../../ddl/idea/Idea';
import { IdeaRatingVDescriptor } from './videarating';
import { IdeaRating } from '../../ddl/idea/IdeaRating';
import { AgreementVDescriptor } from '../agreement/vagreement';
import { Agreement } from '../../ddl/agreement/Agreement';
import { ReasonVDescriptor } from '../reason/vreason';
import { Reason } from '../../ddl/reason/Reason';
import { IdeaLabelVDescriptor } from './videalabel';
import { IdeaLabel } from '../../ddl/idea/IdeaLabel';
import { SituationIdeaVDescriptor } from './vsituationidea';
import { SituationIdea } from '../../ddl/idea/SituationIdea';
import { IdeaTopicVDescriptor } from './videatopic';
import { IdeaTopic } from '../../ddl/idea/IdeaTopic';
export interface IdeaVDescriptor<T> extends AirEntityVDescriptor<T> {
    name?: string | IVStringField;
    agreementShareTotal?: number | IVNumberField;
    numberOfAgreements?: number | IVNumberField;
    urgencyTotal?: number | IVNumberField;
    numberOfUrgencyRatings?: number | IVNumberField;
    numberOfReasons?: number | IVNumberField;
    parent?: IdeaVDescriptor<Idea>;
    children?: IdeaVDescriptor<Idea>;
    ideaRatings?: IdeaRatingVDescriptor<IdeaRating>;
    agreements?: AgreementVDescriptor<Agreement>;
    reasons?: ReasonVDescriptor<Reason>;
    ideaLabels?: IdeaLabelVDescriptor<IdeaLabel>;
    situationIdeas?: SituationIdeaVDescriptor<SituationIdea>;
    ideaTopics?: IdeaTopicVDescriptor<IdeaTopic>;
}
//# sourceMappingURL=videa.d.ts.map