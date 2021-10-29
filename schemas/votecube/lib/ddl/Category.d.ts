import { RepositoryEntity } from '@airport/holding-pattern';
export declare class Category extends RepositoryEntity {
    name: string;
    childCategories: Category[];
    parentCategory: Category;
}
//# sourceMappingURL=Category.d.ts.map