import {
	Column,
	Entity,
	OneToMany,
	Table
} from '@airport/air-traffic-control'
import { AirEntity } from '@airport/holding-pattern'

/**
 * This is the generic position records (not related to any Idea).
 */
@Entity()
@Table({ name: 'POSITIONS' })
export class Position
	extends AirEntity {

	@Column({ name: 'NAME', nullable: false })
	name: string

}
