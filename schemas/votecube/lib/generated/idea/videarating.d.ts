import { IVNumberField } from '@airport/airbridge-validate';
import { AirEntityVDescriptor } from '@airport/holding-pattern/lib/to_be_generated/runtime-index';
import { IdeaVDescriptor } from './videa';
import { SituationIdeaVDescriptor } from './vsituationidea';
export interface IdeaRatingVDescriptor extends AirEntityVDescriptor {
    urgencyRating?: number | IVNumberField;
    idea?: IdeaVDescriptor;
    situationIdea?: SituationIdeaVDescriptor;
}
//# sourceMappingURL=videarating.d.ts.map