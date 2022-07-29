import { IAirEntity } from '@airport/holding-pattern';
import { IAgreement } from './agreement';
import { IReason } from '../reason/reason';
export interface IAgreementReason extends IAirEntity {
    share?: number;
    agreement?: IAgreement;
    reason?: IReason;
}
//# sourceMappingURL=agreementreason.d.ts.map