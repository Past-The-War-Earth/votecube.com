import {
	Column,
	Entity,
	ManyToOne,
	OneToMany,
	Table
} from '@airport/air-traffic-control'
import { RepositoryEntity } from '@airport/holding-pattern'
import { Agreement } from '../agreement/Agreement'
import { Outcome } from './Outcome'
import { Reason } from './Reason'
import { IdeaLabel } from './IdeaLabel'
import { IdeaSituation } from './IdeaSituation'

@Entity()
@Table({ name: 'IDEAS' })
export class Idea
	extends RepositoryEntity {

	@Column({ name: 'NAME', nullable: false })
	name: string

	@ManyToOne()
	outcomeA: Outcome

	@ManyToOne()
	outcomeB: Outcome

	@OneToMany({ mappedBy: 'parent' })
	children: Idea[]

	@OneToMany({ mappedBy: 'idea' })
	ideaLabels: IdeaLabel[]

	@OneToMany({ mappedBy: 'idea' })
	ideaSituations: IdeaSituation[]

}
