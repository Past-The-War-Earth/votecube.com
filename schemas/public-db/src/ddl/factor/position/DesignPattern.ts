import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	Table
}                           from '@airport/air-control'
import {
	DesignPattern_CssClass,
	DesignPattern_Id,
	DesignPattern_Name
} from '../../../types/factor/position/DesignPattern'
import {SystemGeneratedRow} from '../../infrastructure/row/SystemGeneratedRow'

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
