import {
	Column,
	Entity,
	ManyToOne,
	OneToMany,
	Table
} from '@airport/air-control'
import { RepositoryEntity } from '@airport/holding-pattern'
import { ForumThread } from '@votecube/forum/lib/server'
import { Agreement } from '../agreement/Agreement'
import { Outcome } from './Outcome'
import { IdeaFactorPosition } from './IdeaFactorPosition'
import { IdeaLabel } from './IdeaLabel'

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

	@ManyToOne()
	thread: ForumThread

	@OneToMany({ mappedBy: 'parent' })
	children: Idea[]

	@OneToMany({ mappedBy: 'idea' })
	ideaLabels: IdeaLabel[]

	@OneToMany({ mappedBy: 'idea' })
	ideaFactorPositions: IdeaFactorPosition[]

	@OneToMany({ mappedBy: 'idea' })
	agreements: Agreement[]

}
