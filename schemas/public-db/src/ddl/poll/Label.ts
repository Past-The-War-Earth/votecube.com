import {
	Column,
	Entity,
	GeneratedValue,
	Table
}                     from '@airport/air-control'
import {ImmutableRow} from '../ImmutableRow'

export type Label_Id = number
export type Label_Name = string

@Entity()
@Table({name: 'LABELS'})
export class Label
	extends ImmutableRow {

	@GeneratedValue()
	@Column({name: 'LABEL_ID'})
	id: Label_Id

	@Column({name: 'NAME', nullable: false})
	name: Label_Name

}
