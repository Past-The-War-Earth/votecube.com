import { IVNumberField } from '@airport/airbridge-validate';
import { AirEntityVDescriptor } from '@airport/holding-pattern/lib/to_be_generated/runtime-index';
import { IdeaVDescriptor } from './videa';
import { Idea } from '../../ddl/idea/Idea';
import { SituationIdeaVDescriptor } from './vsituationidea';
import { SituationIdea } from '../../ddl/idea/SituationIdea';
export interface IdeaRatingVDescriptor<T> extends AirEntityVDescriptor<T> {
    urgencyRating?: number | IVNumberField;
    idea?: IdeaVDescriptor<Idea>;
    situationIdea?: SituationIdeaVDescriptor<SituationIdea>;
}
//# sourceMappingURL=videarating.d.ts.map