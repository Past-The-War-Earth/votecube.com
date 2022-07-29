import { AirEntity } from '@airport/holding-pattern'
import {
    Column,
    DbNumber,
    DbString,
    Entity,
    ManyToOne,
    Table
} from '@airport/tarmaq-entity'
import { Reason } from './Reason'
import { Idea } from '../idea/Idea'
import { ReasonCubeDisplay } from './ReasonCubeDisplay'

@Entity()
@Table({ name: 'IDEA_REASONS' })
export class IdeaReason
    extends AirEntity {

    @Column({ name: 'IS_POSITIVE_OUTCOME', nullable: false })
    isPositiveOutcome: boolean

    @ManyToOne()
    idea: Idea

    @ManyToOne()
    reason: Reason

    @ManyToOne({ optional: true })
    reasonCubeDisplay: ReasonCubeDisplay

}
