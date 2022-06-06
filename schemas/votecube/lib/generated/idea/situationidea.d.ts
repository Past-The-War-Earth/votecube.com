import { IRepositoryEntity } from '@airport/holding-pattern';
import { IIdea } from './idea';
import { ISituation } from '@sapoto/core';
import { IAgreement } from '../agreement/agreement';
import { IReason } from './reason';
export interface ISituationIdea extends IRepositoryEntity {
    agreementShareTotal?: number;
    numberOfAgreements?: number;
    idea?: IIdea;
    situation?: ISituation;
    agreements?: IAgreement[];
    reasons?: IReason[];
}
//# sourceMappingURL=situationidea.d.ts.map