import {
	Column,
	Entity,
	GeneratedValue,
	Table
}                     from '@airport/air-control'
import {ImmutableActorRow} from '../../infrastructure/ImmutableActorRow'

export type Label_Id = number
export type Label_Name = string

@Entity()
@Table({name: 'LABELS'})
export class Label
	extends ImmutableActorRow {

	@GeneratedValue()
	@Column({name: 'LABEL_ID'})
	id: Label_Id

	@Column({name: 'NAME', nullable: false})
	name: Label_Name

}
