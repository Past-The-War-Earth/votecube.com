import {
    Column,
    DbString,
    Entity,
    ManyToOne,
    OneToMany,
    Table
} from '@airport/air-control'
import { RepositoryEntity } from '@airport/holding-pattern'
import { Label } from '../Label'
import { Idea } from './Idea'

@Entity()
@Table({ name: 'IDEA_LABELS' })
export class IdeaLabel
    extends RepositoryEntity {

    @ManyToOne()
    idea: Idea

    @ManyToOne()
    label: Label

}
