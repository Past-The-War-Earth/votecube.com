import { IRepositoryEntity } from '@airport/holding-pattern';
export interface ICategory extends IRepositoryEntity {
    name?: string;
    childCategories?: ICategory[];
    parentCategory?: ICategory;
}
//# sourceMappingURL=category.d.ts.map