import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	Table
}                           from '@airport/air-traffic-control'
import {
	Emoji_CssClass,
	Emoji_Id,
	Emoji_Name
} from '../../../types/factor/position/Emoji'
import {SystemGeneratedRow} from '../../infrastructure/row/SystemGeneratedRow'

@Entity()
@Table({name: 'EMOJI'})
export class Emoji
	extends SystemGeneratedRow {

	@Id()
	@GeneratedValue()
	@Column({name: 'EMOJI_ID'})
	id: Emoji_Id

	@Column({name: 'EMOJI_NAME'})
	name: Emoji_Name

	@Column({name: 'EMOJI_CSS_CLASS'})
	cssClass: Emoji_CssClass

}
