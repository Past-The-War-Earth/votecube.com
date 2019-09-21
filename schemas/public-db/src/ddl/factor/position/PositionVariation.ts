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
import {ImmutableActorRow} from '../../infrastructure/ImmutableActorRow'
import {PollVariation}     from '../../poll/variation/PollVariation'
import {Position}          from './Position'

export type PositionVariation_Id = number
export type PositionVariation_Description = string

@Entity()
@Table({name: 'POSITION_VARIATIONS'})
export class PositionVariation
	extends ImmutableActorRow {

	@Id()
	@GeneratedValue()
	@Column({name: 'POSITION_VARIATION_ID'})
	id: PositionVariation_Id

	@ManyToOne()
	@JoinColumn({name: 'POLL_VARIATION_ID'})
	createdAtPollVariation: PollVariation

	@ManyToOne()
	@JoinColumn({name: 'POSITION_ID'})
	position: Position

	@ManyToOne()
	@JoinColumn({
		name: 'PARENT_POSITION_VARIATION_ID',
		referencedColumnName: 'POSITION_VARIATION_ID'
	})
	parent: PositionVariation

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'parent'})
	children: PositionVariation[]

}
