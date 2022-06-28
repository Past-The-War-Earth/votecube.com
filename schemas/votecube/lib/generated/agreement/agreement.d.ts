import { IAirEntity } from '@airport/holding-pattern';
import { ISituationIdea } from '../idea/situationidea';
import { IIdeaRating } from '../idea/idearating';
import { IAgreementReason } from './agreementreason';
export interface IAgreement extends IAirEntity {
    situationIdea?: ISituationIdea;
    idea?: IIdeaRating;
    agreementReasons?: IAgreementReason[];
}
//# sourceMappingURL=agreement.d.ts.map