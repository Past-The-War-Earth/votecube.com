import { IAirEntity } from '@airport/holding-pattern';
import { ISituationIdea } from '../idea/situationidea';
import { IIdea } from '../idea/idea';
import { IAgreementReason } from './agreementreason';
export interface IAgreement extends IAirEntity {
    shareTotal?: number;
    situationIdea?: ISituationIdea;
    idea?: IIdea;
    agreementReasons?: IAgreementReason[];
}
//# sourceMappingURL=agreement.d.ts.map