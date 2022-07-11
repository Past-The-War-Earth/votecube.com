import { AirEntity } from '@airport/holding-pattern'
import {
    Column,
    DbString,
    Entity,
    ManyToOne,
    OneToMany,
    Table
} from '@airport/tarmaq-entity'
import { Label } from '../Label'
import { Idea } from './Idea'

@Entity()
@Table({ name: 'IDEA_LABELS' })
export class IdeaLabel
    extends AirEntity {

    @ManyToOne()
    idea: Idea

    @ManyToOne()
    label: Label

}
