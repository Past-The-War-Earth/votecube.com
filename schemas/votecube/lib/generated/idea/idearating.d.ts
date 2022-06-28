import { IAirEntity } from '@airport/holding-pattern';
import { IIdea } from './idea';
import { ISituationIdea } from './situationidea';
export interface IIdeaRating extends IAirEntity {
    urgencyRating?: number;
    idea?: IIdea;
    situationIdea?: ISituationIdea;
}
//# sourceMappingURL=idearating.d.ts.map