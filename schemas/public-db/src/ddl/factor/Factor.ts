import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	JoinColumn,
	ManyToOne,
	OneToMany,
	Table
}                                   from '@airport/air-control'
import {CascadeType}                from '@airport/ground-control'
import {ImmutableActorRow}          from '../infrastructure/ImmutableActorRow'
import {FactorSkinVariation}        from './FactorSkinVariation'
import {FactorVariation}            from './FactorVariation'
import {FactorVariationTranslation} from './FactorVariationTranslation'
import {FactorPosition}             from './position/FactorPosition'

export type Factor_Id = number

@Entity()
@Table({name: 'FACTORS'})
export class Factor
	extends ImmutableActorRow {

	@GeneratedValue()
	@Id()
	@Column({name: 'FACTOR_ID'})
	id: Factor_Id

	@ManyToOne()
	@JoinColumn({
		name: 'PARENT_FACTOR_VARIATION_TRANSLATION_ID',
		referencedColumnName: 'FACTOR_VARIATION_TRANSLATION_ID'
	})
	parentTranslation: FactorVariationTranslation

	@ManyToOne()
	@JoinColumn({name: 'PARENT_FACTOR_ID', referencedColumnName: 'FACTOR_ID'})
	parent: Factor

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'parent'})
	children: Factor[]

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'factor'})
	factorPositions: FactorPosition[]

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'factor'})
	variations: FactorVariation[]

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'factor'})
	skins: FactorSkinVariation[]

}
