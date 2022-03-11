import { IRepositoryEntity } from '@airport/holding-pattern';
import { IAgreement } from './agreement';
import { IIdeaFactorPosition } from '../idea/ideafactorposition';
export interface IAgreementFactor extends IRepositoryEntity {
    axis?: string;
    share?: number;
    agreement?: IAgreement;
    ideaFactorPosition?: IIdeaFactorPosition;
}
//# sourceMappingURL=agreementfactor.d.ts.map