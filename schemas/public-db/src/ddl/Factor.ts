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
import {ImmutableRepoRow} from '@airport/holding-pattern'

export type Factor_Color = number
export type Factor_Id = number
export type Factor_Name = string

@Entity()
@Table({name: 'FACTORS'})
export class Factor
	extends ImmutableRepoRow {

	// @GeneratedValue()
	@TraditionalServerSeq()
	@Column({name: 'FACTOR_ID'})
	id: Factor_Id

	@Column({name: 'COLOR_ID', nullable: false})
	color: Factor_Color

	@Column({name: 'FACTOR_NAME', nullable: false})
	name: Factor_Name

	@ManyToOne()
	// @JoinColumn({name: 'PARENT_FACTOR_ID', referencedColumnName: 'FACTOR_ID'})
	parent: Factor

}
