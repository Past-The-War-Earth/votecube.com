import {
	Column,
	Entity,
	OneToMany,
	Table
} from '@airport/air-traffic-control'
import { RepositoryEntity } from '@airport/holding-pattern'
import { IdeaLabel } from './IdeaLabel'
import { SituationIdea } from './SituationIdea'
import { IdeaTopic } from './IdeaTopic'

@Entity()
@Table({ name: 'IDEAS' })
export class Idea
	extends RepositoryEntity {

	@Column({ name: 'NAME', nullable: false })
	name: string
 
	@OneToMany({ mappedBy: 'parent' })
	children: Idea[]

	@OneToMany({ mappedBy: 'idea' })
	ideaLabels: IdeaLabel[]

	@OneToMany({ mappedBy: 'idea' })
	situationIdeas: SituationIdea[]

	@OneToMany({ mappedBy: 'idea' })
	ideaTopics: IdeaTopic[]

}
