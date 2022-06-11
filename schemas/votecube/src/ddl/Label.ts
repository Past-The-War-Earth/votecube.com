import {
    Column,
    Entity,
    Table
} from '@airport/air-traffic-control'
import { AirEntity } from '@airport/holding-pattern'

@Entity()
@Table({ name: 'LABELS' })
export class Label
    extends AirEntity {

    @Column({ name: 'NAME', nullable: false })
    name: string

}
