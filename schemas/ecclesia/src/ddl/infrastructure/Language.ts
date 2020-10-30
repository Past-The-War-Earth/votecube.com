import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	Table
}                           from '@airport/air-control'
import {
	Language_Id,
	Language_Name
}                           from '../../types/infrastructure/Language'
import {SystemGeneratedRow} from './row/SystemGeneratedRow'

@Entity()
@Table({name: 'LANGUAGES'})
export class Language
	extends SystemGeneratedRow {

	@Id()
	@GeneratedValue()
	@Column({name: 'LANGUAGE_ID'})
	id: Language_Id

	@Column({name: 'LANGUAGE_NAME'})
	name: Language_Name

}
