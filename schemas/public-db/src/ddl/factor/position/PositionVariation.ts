import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	JoinColumn,
	ManyToOne,
	Table
}                      from '@airport/air-control'
import {PollVariation} from '../../poll/PollVariation'
import {Position}      from './Position'

export type PositionVariation_Id = number
export type PositionVariation_Description = string

@Entity()
@Table({name: 'POSITION_VARIATIONS'})
export class PositionVariation {

	@Id()
	@GeneratedValue()
	@Column({name: 'POSITION_VARIATION_ID'})
	id: PositionVariation_Id

	@Column({name: 'POSITION_VARIATION_DESCRIPTION', nullable: false})
	description: PositionVariation_Description

	@ManyToOne()
	@JoinColumn({name: 'POLL_VARIATION_ID'})
	pollVariation: PollVariation

	@ManyToOne()
	@JoinColumn({name: 'POSITION_ID'})
	position: Position

	@ManyToOne()
	@JoinColumn({
		name: 'PARENT_POSITION_VARIATION_ID',
		referencedColumnName: 'POSITION_VARIATION_ID'
	})
	parent: PositionVariation

}
