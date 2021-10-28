import {
    Column,
    DbString,
    Entity,
    ManyToOne,
    OneToMany,
    Table
} from '@airport/air-control'
import { RepositoryEntity } from '@airport/holding-pattern'

@Entity()
@Table({ name: 'CATEGORIES' })
export class Category
    extends RepositoryEntity {

    @Column({ name: 'NAME', nullable: false })
    name: string

    @OneToMany({ mappedBy: 'parentCategory' })
    childCategories: Category[]

    @ManyToOne()
    parentCategory: Category

}
