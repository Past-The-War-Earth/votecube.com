import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	JoinColumn,
	ManyToOne,
	Table
}                        from '@airport/air-control'
import {
	BackgroundColor,
	TextColor
}                        from '../common'
import {Factor}          from './Factor'
import {FactorVariation} from './FactorVariation'

export type FactorSkin_Id = number
export type FactorSkin_BackgroundColor = BackgroundColor
export type FactorSkin_TextColor = TextColor

@Entity()
@Table({name: 'FACTOR_SKINS'})
export class FactorSkin {

	@Id()
	@GeneratedValue()
	@Column({name: 'FACTOR_SKIN_ID'})
	id: FactorSkin_Id

	@Column({name: 'FACTOR_SKIN_BACKGROUND_COLOR_ID', nullable: false})
	backgroundColor: FactorSkin_BackgroundColor

	@Column({name: 'FACTOR_SKIN_TEXT_COLOR_ID', nullable: false})
	textColor: FactorSkin_TextColor

	@ManyToOne()
	@JoinColumn({name: 'FACTOR_ID'})
	factor: Factor

	@ManyToOne()
	@JoinColumn({name: 'PARENT_FACTOR_SKIN_ID', referencedColumnName: 'FACTOR_SKIN_ID'})
	parent: FactorVariation

}
