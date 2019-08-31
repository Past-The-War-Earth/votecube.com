import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	JoinColumn,
	ManyToOne,
	Table,
	TraditionalServerSeq
} from '@airport/air-control'
import {
	ImmutableRepoRow
} from '@airport/holding-pattern'

export type Position_Id = number
export type Position_Name = string

@Entity()
@Table({name: 'POSITIONS'})
export class Position
	extends ImmutableRepoRow {

	// @GeneratedValue()
	@TraditionalServerSeq()
	@Column({name: 'POSITION_ID'})
	id: Position_Id

	@Column({name: 'POSITION_DESCRIPTION', nullable: false})
	name: Position_Name

	@ManyToOne()
	// @JoinColumn({name: 'PARENT_POSITION_ID', referencedColumnName: 'POSITION_ID'})
	parent: Position

}
