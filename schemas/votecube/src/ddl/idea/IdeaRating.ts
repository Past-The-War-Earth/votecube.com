import {
    Column,
    Entity,
    ManyToOne,
    Table
} from '@airport/air-traffic-control'
import { AirEntity } from '@airport/holding-pattern'
import { Idea } from './Idea'
import { SituationIdea } from './SituationIdea'

@Entity()
@Table({ name: 'IDEA_RATINGS' })
export class IdeaRating
    extends AirEntity {

    @Column({ name: 'URGENCY_RATING' })
    urgencyRating: number

    @ManyToOne()
    idea: Idea

    @ManyToOne({ optional: true })
    situationIdea: SituationIdea

}
