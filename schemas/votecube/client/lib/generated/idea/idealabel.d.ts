import { IRepositoryEntity } from '@airport/holding-pattern';
import { IIdea } from './idea';
import { ILabel } from '../label';
export interface IIdeaLabel extends IRepositoryEntity {
    idea?: IIdea;
    label?: ILabel;
}
//# sourceMappingURL=idealabel.d.ts.map