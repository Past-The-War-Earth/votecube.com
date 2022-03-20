import { IRepositoryEntity } from '@airport/holding-pattern';
import { IIdeaSituation } from '../idea/ideasituation';
import { IAgreementFactor } from './agreementfactor';
export interface IAgreement extends IRepositoryEntity {
    ideaSituation?: IIdeaSituation;
    factors?: IAgreementFactor[];
}
//# sourceMappingURL=agreement.d.ts.map