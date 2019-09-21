import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	JoinColumn,
	ManyToOne,
	OneToMany,
	Table
}                          from '@airport/air-control'
import {CascadeType}       from '@airport/ground-control'
import {PositionVariation} from '../../../factor/position/PositionVariation'
import {ImmutableRow}      from '../../../infrastructure/ImmutableRow'
import {PollVariation}     from '../PollVariation'

export type PollPositionVariation_Id = number

@Entity()
@Table({name: 'POLL_POSITION_VARIATIONS'})
export class PollPositionVariation
	extends ImmutableRow {

	@GeneratedValue()
	@Id()
	@Column({name: 'POLL_POSITION_VARIATION_ID'})
	id: PollPositionVariation_Id

	@ManyToOne()
	@JoinColumn({name: 'POLL_VARIATION_ID'})
	pollVariation: PollVariation

	@ManyToOne()
	@JoinColumn({name: 'POSITION_VARIATION_ID', nullable: false})
	positionVariation: PositionVariation

	/**
	 * This is done at poll specific level to record the relationship between
	 * the polls, via which the Position evolved.
	 */
	@ManyToOne()
	@JoinColumn({
		name: 'PARENT_POLL_POSITION_VARIATION_ID',
		referencedColumnName: 'POLL_POSITION_VARIATION_ID'
	})
	parent: PollPositionVariation

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'parent'})
	children: PollPositionVariation[]
}
