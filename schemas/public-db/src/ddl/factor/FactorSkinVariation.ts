import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	JoinColumn,
	ManyToOne,
	OneToMany,
	Table
}                          from '@airport/air-control'
import {CascadeType}       from '@airport/ground-control'
import {
	BackgroundColor,
	TextColor
}                          from '../common'
import {ImmutableActorRow} from '../infrastructure/ImmutableActorRow'
import {PollVariation}     from '../poll/variation/PollVariation'
import {Factor}            from './Factor'

export type FactorSkinVariation_Id = number
export type FactorSkinVariation_BackgroundColor = BackgroundColor
export type FactorSkinVariation_TextColor = TextColor

@Entity()
@Table({name: 'FACTOR_SKIN_VARIATIONS'})
export class FactorSkinVariation
	extends ImmutableActorRow {

	@Id()
	@GeneratedValue()
	@Column({name: 'FACTOR_SKIN_VARIATION_ID'})
	id: FactorSkinVariation_Id

	@Column({name: 'BACKGROUND_COLOR_ID', nullable: false})
	backgroundColor: FactorSkinVariation_BackgroundColor

	@Column({name: 'TEXT_COLOR_ID', nullable: false})
	textColor: FactorSkinVariation_TextColor

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

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'parent'})
	children: FactorSkinVariation[]

}
