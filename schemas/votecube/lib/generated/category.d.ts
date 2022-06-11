import { IAirEntity } from '@airport/holding-pattern';
export interface ICategory extends IAirEntity {
    name?: string;
    childCategories?: ICategory[];
    parentCategory?: ICategory;
}
//# sourceMappingURL=category.d.ts.map