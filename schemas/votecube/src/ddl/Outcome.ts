import {
    Column,
    Entity,
    Table
} from '@airport/air-control'
import { RepositoryEntity } from '@airport/holding-pattern'

@Entity()
@Table({ name: 'OUTCOMES' })
export class Outcome
    extends RepositoryEntity {

    @Column({ name: 'NAME', nullable: false })
    name: string

}
