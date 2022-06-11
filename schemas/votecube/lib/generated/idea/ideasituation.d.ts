import { IAirEntity } from '@airport/holding-pattern';
import { IIdea } from './idea';
import { ISituation } from '@sapoto/core';
import { IAgreement } from '../agreement/agreement';
import { IReason } from './reason';
export interface IIdeaSituation extends IAirEntity {
    idea?: IIdea;
    situation?: ISituation;
    agreements?: IAgreement[];
    reasons?: IReason[];
}
//# sourceMappingURL=ideasituation.d.ts.map