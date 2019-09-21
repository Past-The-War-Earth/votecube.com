import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	Table
}                           from '@airport/air-control'
import {SystemGeneratedRow} from '../../infrastructure/SystemGeneratedRow'

export type DesignPattern_Id = number
export type DesignPattern_Name = string
export type DesignPattern_CssClass = string

@Entity()
@Table({name: 'DESIGN_PATTERNS'})
export class DesignPattern
	extends SystemGeneratedRow {

	@Id()
	@GeneratedValue()
	@Column({name: 'DESIGN_PATTERN_ID'})
	id: DesignPattern_Id

	@Column({name: 'DESIGN_PATTERN_NAME'})
	name: DesignPattern_Name

	@Column({name: 'DESIGN_PATTERN_CSS_CLASS'})
	cssClass: DesignPattern_CssClass

}
