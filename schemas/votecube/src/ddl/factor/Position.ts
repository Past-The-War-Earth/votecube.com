import {
	Column,
	Entity,
	OneToMany,
	Table
} from '@airport/air-traffic-control'
import { RepositoryEntity } from '@airport/holding-pattern'

/**
 * This is the generic position records (not related to any Idea).
 */
@Entity()
@Table({ name: 'POSITIONS' })
export class Position
	extends RepositoryEntity {

	@Column({ name: 'NAME', nullable: false })
	name: string

}
