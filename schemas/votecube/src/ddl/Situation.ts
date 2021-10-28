import {
	Column,
	Entity,
	ManyToOne,
	OneToMany,
	Table
} from '@airport/air-control'
import { RepositoryEntity } from '@airport/holding-pattern'
import { Category } from './Category'

@Entity()
@Table({ name: 'SITUATIONS' })
export class Situation
	extends RepositoryEntity {

	@Column({ name: 'NAME', nullable: false })
	name: string

	@ManyToOne()
	theme: Category

	@ManyToOne()
	parent: Situation

	@OneToMany({ mappedBy: 'parent' })
	children: Situation[]

	@Column({ name: 'OUTCOME_A', nullable: false })
	outcomeA: string

	@Column({ name: 'OUTCOME_B', nullable: false })
	outcomeB: string

}
