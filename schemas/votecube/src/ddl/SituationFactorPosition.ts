import {
	Column,
	DbNumber,
	DbString,
	Entity,
	GeneratedValue,
	Id,
	JoinColumn,
	JoinColumns,
	ManyToOne,
	OneToMany,
	Table
}                       from '@airport/air-control'
import { RepositoryEntity } from '@airport/holding-pattern'
import { Situation } from './Situation'

@Entity()
@Table({name: 'POLL_REVISION_FACTOR_POSITIONS'})
// User information recorded at PollRevisionOpinion level
export class PollRevisionFactorPosition
	extends RepositoryEntity {

	@Column({name: 'FACTOR_COORDINATE_AXIS', nullable: false})
	@DbString()
	axis: 'x' | 'y' | 'z'

	@Column({name: 'POSITION_ORIENTATION', nullable: false})
	@DbNumber()
	dir: -1 | 1

	@Column({name: 'FACTOR_NUMBER', nullable: false})
	@DbNumber()
	factorNumber: 1 | 2 | 3

	@Column({name: 'COLOR_BLUE', nullable: false})
	blue: number // 0-255

	@Column({name: 'COLOR_GREEN', nullable: false})
	green: number // 0-255

	@Column({name: 'COLOR_RED', nullable: false})
	red: number // 0-255

	@Column({name: 'OUTCOME_ORDINAL', nullable: false})
	@DbString()
	outcomeOrdinal: 'A' | 'B'

	@ManyToOne()
	situation: Situation

	/**
	 * This is done at Factor + Position level (vs FactorRevision & PositionRevision)
	 * because the underlying relationship between Factor and Position does not change
	 * with revisions.
	 *
	 * Essentially this just says which positions belong to which factors.  Which
	 * revisions is determined at PollRevision level (not PollFactorPositionRevision)
	 */
	@ManyToOne()
	@JoinColumns([{
		name: 'FACTOR_ID', nullable: false
	}, {
		name: 'POSITION_ID', nullable: false
	}])
	factorPosition: FactorPosition

}
