import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	JoinColumn,
	ManyToOne,
	Table
}                      from '@airport/air-control'
import {
	BackgroundColor,
	TextColor
}                      from '../common'
import {PollVariation} from '../poll/variation/PollVariation'
import {Factor}        from './Factor'

export type FactorSkin_Id = number
export type FactorSkin_BackgroundColor = BackgroundColor
export type FactorSkin_TextColor = TextColor

@Entity()
@Table({name: 'FACTOR_SKIN_VARIATIONS'})
export class FactorSkinVariation {

	@Id()
	@GeneratedValue()
	@Column({name: 'FACTOR_SKIN_VARIATION_ID'})
	id: FactorSkin_Id

	@Column({name: 'BACKGROUND_COLOR_ID', nullable: false})
	backgroundColor: FactorSkin_BackgroundColor

	@Column({name: 'TEXT_COLOR_ID', nullable: false})
	textColor: FactorSkin_TextColor

	@ManyToOne()
	@JoinColumn({name: 'POLL_VARIATION_ID'})
	pollVariation: PollVariation

	@ManyToOne()
	@JoinColumn({name: 'FACTOR_ID'})
	factor: Factor

	@ManyToOne()
	@JoinColumn({
		name: 'PARENT_FACTOR_SKIN_VARIATION_ID',
		referencedColumnName: 'FACTOR_SKIN_VARIATION_ID'
	})
	parent: FactorSkinVariation

}
