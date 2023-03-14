import { AirEntity } from '@airport/final-approach'
import {
	Entity,
	ManyToOne,
	Table
} from '@airport/tarmaq-entity'
import { Factor, Position } from '../ddl'

@Entity()
@Table({ name: 'REASONS' })
export class Reason
	extends AirEntity {

	@ManyToOne()
	factor: Factor

	@ManyToOne()
	position: Position

}
