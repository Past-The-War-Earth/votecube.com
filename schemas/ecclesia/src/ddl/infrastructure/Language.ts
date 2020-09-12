import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	Table
} from '@airport/air-control'
import {
	Language_Id,
	Language_Name
} from '../../types/infrastructure/Language'

@Entity()
@Table({name: 'LANGUAGES'})
export class Language {

	@Id()
	@GeneratedValue()
	@Column({name: 'LANGUAGE_ID'})
	id: Language_Id

	@Column({name: 'LANGUAGE_NAME'})
	name: Language_Name

}
