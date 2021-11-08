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
import { Situation } from './Situation'

@Entity()
@Table({ name: 'SITUATION_LABELS' })
export class SituationLabel
    extends RepositoryEntity {

    @ManyToOne()
    situation: Situation

    @ManyToOne()
    label: Label

}
