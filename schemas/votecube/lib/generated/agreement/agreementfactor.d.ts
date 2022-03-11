import { IRepositoryEntity } from '@airport/holding-pattern';
import { IAgreement } from './agreement';
import { IReason } from '../idea/reason';
export interface IAgreementFactor extends IRepositoryEntity {
    axis?: string;
    share?: number;
    agreement?: IAgreement;
    reason?: IReason;
}
//# sourceMappingURL=agreementfactor.d.ts.map