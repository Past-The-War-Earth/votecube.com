import {
	Column,
	DbNumber,
	DbString,
	Entity,
	ManyToOne,
	Table
} from '@airport/air-control'
import { RepositoryEntity } from '@airport/holding-pattern'
import { Factor, Position } from '../ddl'
import { Situation } from './Situation'

@Entity()
@Table({ name: 'SITUATION_FACTOR_POSITIONS' })
export class SituationFactorPosition
	extends RepositoryEntity {

	@Column({ name: 'FACTOR_COORDINATE_AXIS', nullable: false })
	@DbString()
	axis: 'x' | 'y' | 'z'

	@Column({ name: 'POSITION_ORIENTATION', nullable: false })
	@DbNumber()
	dir: -1 | 1

	@Column({ name: 'FACTOR_NUMBER', nullable: false })
	@DbNumber()
	factorNumber: 1 | 2 | 3

	@Column({ name: 'COLOR_BLUE', nullable: false })
	blue: number // 0-255

	@Column({ name: 'COLOR_GREEN', nullable: false })
	green: number // 0-255

	@Column({ name: 'COLOR_RED', nullable: false })
	red: number // 0-255

	@Column({ name: 'OUTCOME_ORDINAL', nullable: false })
	@DbString()
	outcomeOrdinal: 'A' | 'B'

	@ManyToOne()
	situation: Situation

	@ManyToOne()
	factor: Factor

	@ManyToOne()
	position: Position

}
