import { AirEntity } from '@airport/holding-pattern'
import {
    Column,
    Entity,
    ManyToOne,
    Table
} from '@airport/tarmaq-entity'
import { SituationIdea } from '../idea/SituationIdea'
import { Reason } from './Reason'
import { ReasonCubeDisplay } from './ReasonCubeDisplay'

@Entity()
@Table({ name: 'SITUATION_IDEA_REASONS' })
export class SituationIdeaReason
    extends AirEntity {

    @Column({ name: 'IS_POSITIVE_OUTCOME', nullable: false })
    isPositiveOutcome: boolean

    @ManyToOne({ optional: true })
    situationIdea: SituationIdea

    @ManyToOne()
    reason: Reason

    @ManyToOne({ optional: true })
    reasonCubeDisplay: ReasonCubeDisplay

}
