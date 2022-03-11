import { IRepositoryEntity } from '@airport/holding-pattern';
import { IIdea } from '../idea/idea';
import { IAgreementFactor } from './agreementfactor';
export interface IAgreement extends IRepositoryEntity {
    idea?: IIdea;
    factors?: IAgreementFactor[];
}
//# sourceMappingURL=agreement.d.ts.map