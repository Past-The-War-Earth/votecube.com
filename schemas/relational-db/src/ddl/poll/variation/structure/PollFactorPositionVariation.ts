import {
	Column,
	DbNumber,
	DbString,
	Entity,
	GeneratedValue,
	Id,
	JoinColumn,
	ManyToOne,
	OneToMany,
	Table
}                       from '@airport/air-control'
import {CascadeType}    from '@airport/ground-control'
import {
	PollFactorPositionVariation_Axis,
	PollFactorPositionVariation_Dir,
	PollFactorPositionVariation_Id
}                       from '../../../../types/poll/variation/structure/PollFactorPositionVariation'
import {FactorPosition} from '../../../factor/position/FactorPosition'
import {ImmutableRow}   from '../../../infrastructure/row/ImmutableRow'
import {PollVariation}  from '../PollVariation'

@Entity()
@Table({name: 'POLL_FACTOR_POSITION_VARIATIONS'})
export class PollFactorPositionVariation
	extends ImmutableRow {

	@GeneratedValue()
	@Id()
	@Column({name: 'POLL_FACTOR_POSITION_VARIATION_ID'})
	id: PollFactorPositionVariation_Id

	@Column({name: 'FACTOR_COORDINATE_AXIS', nullable: false})
	@DbString()
	axis: PollFactorPositionVariation_Axis

	@Column({name: 'POSITION_ORIENTATION', nullable: false})
	@DbNumber()
	dir: PollFactorPositionVariation_Dir

	@ManyToOne()
	@JoinColumn({name: 'POLL_VARIATION_ID'})
	pollVariation: PollVariation

	/**
	 * This is done at Factor + Position level (vs FactorVariation & PositionVariation)
	 * because the underlying relationship between Factor and Position does not change
	 * with variations.
	 *
	 * Essentially this just says which positions belong to which factors.  Which
	 * variations is determined at PollVariation level (not PollFactorPositionVariation)
	 */
	@ManyToOne()
	@JoinColumn({name: 'FACTOR_POSITION_ID', nullable: false})
	factorPosition: FactorPosition

	@ManyToOne()
	@JoinColumn({
		name: 'PARENT_POLL_FACTOR_POSITION_VARIATION_ID',
		referencedColumnName: 'POLL_FACTOR_POSITION_VARIATION_ID'
	})
	parent: PollFactorPositionVariation

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'parent'})
	children: PollFactorPositionVariation[]
}
