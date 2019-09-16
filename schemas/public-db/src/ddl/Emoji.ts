import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	Table
} from '@airport/air-control'

export type Emoji_Id = number
export type Emoji_Name = string
export type Emoji_CssClass = string

@Entity()
@Table({name: 'EMOJI'})
export class Emoji {

	@Id()
	@GeneratedValue()
	@Column({name: 'EMOJI_ID'})
	id: Emoji_Id

	@Column({name: 'EMOJI_NAME'})
	name: Emoji_Name

	@Column({name: 'EMOJI_CSS_CLASS'})
	cssClass: Emoji_CssClass

}
