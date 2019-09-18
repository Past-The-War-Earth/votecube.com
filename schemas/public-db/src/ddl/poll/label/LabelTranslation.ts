import {
	Column,
	Entity,
	GeneratedValue,
	Table
}                     from '@airport/air-control'
import {ImmutableRow} from '../../infrastructure/ImmutableRow'

export type LabelTranslation_Id = number
export type LabelTranslation_Name = string

@Entity()
@Table({name: 'LABEL_TRANSLATIONS'})
export class LabelTranslation
	extends ImmutableRow {

	@GeneratedValue()
	@Column({name: 'LABEL_TRANSLATION_ID'})
	id: LabelTranslation_Id

	@Column({name: 'NAME', nullable: false})
	name: LabelTranslation_Name

}
