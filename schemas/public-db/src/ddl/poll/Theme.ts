import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	Table
}                           from '@airport/air-control'
import {SystemGeneratedRow} from '../infrastructure/SystemGeneratedRow'

export type Theme_Id = number
export type Theme_Name = string

@Entity()
@Table({name: 'THEMES'})
export class Theme
	extends SystemGeneratedRow {

	@GeneratedValue()
	@Id()
	@Column({name: 'THEME_ID'})
	id: Theme_Id

	@Column({name: 'NAME', nullable: false})
	name: Theme_Name

}
