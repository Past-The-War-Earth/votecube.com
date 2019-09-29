import {
	Column,
	Entity,
	GeneratedValue,
	Table
}                          from '@airport/air-control'
import {
	Label_Id,
	Label_Name
}                          from '../../../../types/poll/variation/label/Label'
import {ImmutableActorRow} from '../../../infrastructure/row/ImmutableActorRow'

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
