import { IRepositoryEntity } from '@airport/holding-pattern';
import { IIdea } from './idea';
import { ISituation } from '@dobecause/core';
import { IAgreement } from '../agreement/agreement';
import { IReason } from './reason';
export interface IIdeaSituation extends IRepositoryEntity {
    idea?: IIdea;
    situation?: ISituation;
    agreements?: IAgreement[];
    reasons?: IReason[];
}
//# sourceMappingURL=ideasituation.d.ts.map