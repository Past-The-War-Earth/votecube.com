import {
	Column,
	Entity,
	Id,
	Table,
	TraditionalServerSeq
} from '@airport/air-control'
import {ReferenceRow} from '@airport/holding-pattern'

export type Theme_Id = number
export type Theme_Name = string

@Entity()
@Table({name: 'THEMES'})
export class Theme
	extends ReferenceRow {

	@TraditionalServerSeq()
	@Id()
	@Column({name: 'THEME_ID'})
	id: Theme_Id

	@Column({name: 'NAME', nullable: false})
	name: Theme_Name

}
