import {
	Column,
	Entity,
	ManyToOne,
	OneToMany,
	Table,
	Transient
} from '@airport/air-traffic-control'
import { AirEntity } from '@airport/holding-pattern'
import { IdeaLabel } from './IdeaLabel'
import { SituationIdea } from './SituationIdea'
import { IdeaTopic } from './IdeaTopic'
import { IdeaRating } from './IdeaRating'
import { Agreement } from '../agreement/Agreement'
import { Reason } from './Reason'

@Entity()
@Table({ name: 'IDEAS' })
export class Idea
	extends AirEntity {

	@Column({ name: 'NAME', nullable: false })
	name: string

	@Column({ name: 'AGREEMENT_SHARE_TOTAL' })
	agreementShareTotal: number

	@Column({ name: 'NUMBER_OF_AGREEMENTS' })
	numberOfAgreements: number

	@Column({ name: 'URGENCY_TOTAL' })
	urgencyTotal: number

	@Column({ name: 'NUMBER_OF_URGENCY_RATINGS' })
	numberOfUrgencyRatings: number

	@Column({ name: 'NUMBER_OF_REASONS' })
	numberOfReasons: number

	@ManyToOne({ optional: true })
	parent: Idea

	@OneToMany({ mappedBy: 'parent' })
	children: Idea[]

	@OneToMany({ mappedBy: 'idea' })
	ideaRatings: IdeaRating

	@OneToMany({ mappedBy: 'idea' })
	agreements: Agreement[]

	@OneToMany({ mappedBy: 'idea' })
	reasons: Reason[]

	@OneToMany({ mappedBy: 'idea' })
	ideaLabels: IdeaLabel[]

	@OneToMany({ mappedBy: 'idea' })
	situationIdeas: SituationIdea[]

	@OneToMany({ mappedBy: 'idea' })
	ideaTopics: IdeaTopic[]

	@Transient()
	userIdeaRating?: IdeaRating

	@Transient()
	userAgreement?: Agreement

	@Transient()
	userReasons?: Reason[]

}
