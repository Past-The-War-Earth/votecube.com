import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	Table
} from '@airport/air-control'

export type Language_Id = number
export type Language_Name = string

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
