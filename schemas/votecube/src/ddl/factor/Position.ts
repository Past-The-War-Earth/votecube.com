import { AirEntity } from '@airport/final-approach'
import {
	Column,
	Entity,
	Table
} from '@airport/tarmaq-entity'

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
