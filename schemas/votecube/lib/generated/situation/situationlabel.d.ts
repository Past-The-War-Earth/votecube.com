import { IRepositoryEntity } from '@airport/holding-pattern';
import { ISituation } from './situation';
import { ILabel } from '../label';
export interface ISituationLabel extends IRepositoryEntity {
    situation?: ISituation;
    label?: ILabel;
}
//# sourceMappingURL=situationlabel.d.ts.map