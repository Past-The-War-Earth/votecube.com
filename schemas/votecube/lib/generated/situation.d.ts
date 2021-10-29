import { IRepositoryEntity } from '@airport/holding-pattern';
import { ICategory } from './category';
export interface ISituation extends IRepositoryEntity {
    theme?: ICategory;
    parent?: ISituation;
    children?: ISituation[];
}
//# sourceMappingURL=situation.d.ts.map