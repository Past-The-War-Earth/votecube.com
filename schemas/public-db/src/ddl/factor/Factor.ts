import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	JoinColumn,
	ManyToOne,
	OneToMany,
	Table
}                            from '@airport/air-control'
import {CascadeType}         from '@airport/ground-control'
import {
	BackgroundColor,
	TextColor
}                            from '../common'
import {ImmutableRow}        from '../ImmutableRow'
import {FactorSkinVariation} from './FactorSkinVariation'
import {FactorVariation}     from './FactorVariation'
import {FactorPosition}      from './position/FactorPosition'

export type Factor_BackgroundColor = BackgroundColor
export type Factor_TextColor = TextColor
export type Factor_Id = number
export type Factor_Name = string

@Entity()
@Table({name: 'FACTORS'})
export class Factor
	extends ImmutableRow {

	@GeneratedValue()
	@Id()
	@Column({name: 'FACTOR_ID'})
	id: Factor_Id

	@Column({name: 'BACKGROUND_COLOR_ID', nullable: false})
	backgroundColor: Factor_BackgroundColor

	@Column({name: 'TEXT_COLOR_ID', nullable: false})
	textColor: Factor_TextColor

	@Column({name: 'FACTOR_NAME', nullable: false})
	name: Factor_Name

	@ManyToOne()
	@JoinColumn({name: 'PARENT_FACTOR_ID', referencedColumnName: 'FACTOR_ID'})
	parent: Factor

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'factor'})
	factorPositions: FactorPosition[]

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'factor'})
	variations: FactorVariation[]

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'factor'})
	skins: FactorSkinVariation[]

}
