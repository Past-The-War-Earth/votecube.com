import { IRepositoryEntity } from '@airport/holding-pattern';
import { ISituationIdea } from '../idea/situationidea';
import { IAgreementReason } from './agreementreason';
export interface IAgreement extends IRepositoryEntity {
    situationIdea?: ISituationIdea;
    agreementReasons?: IAgreementReason[];
}
//# sourceMappingURL=agreement.d.ts.map