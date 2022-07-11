import { AirEntity } from '@airport/holding-pattern'
import {
    Column,
    Entity,
    Table
} from '@airport/tarmaq-entity'

@Entity()
@Table({ name: 'LABELS' })
export class Label
    extends AirEntity {

    @Column({ name: 'NAME', nullable: false })
    name: string

}
