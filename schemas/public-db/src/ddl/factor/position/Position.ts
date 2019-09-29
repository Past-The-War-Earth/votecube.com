import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	JoinColumn,
	ManyToOne,
	OneToMany,
	Table
}                                     from '@airport/air-control'
import {CascadeType}                  from '@airport/ground-control'
import {Position_Id}                  from '../../../types/factor/position/Position'
import {ImmutableActorRow}            from '../../infrastructure/row/ImmutableActorRow'
import {FactorPosition}               from './FactorPosition'
import {PositionVariation}            from './PositionVariation'
import {PositionVariationTranslation} from './PositionVariationTranslation'

@Entity()
@Table({name: 'POSITIONS'})
export class Position
	extends ImmutableActorRow {

	@GeneratedValue()
	@Id()
	@Column({name: 'POSITION_ID'})
	id: Position_Id

	@ManyToOne()
	@JoinColumn({
		name: 'PARENT_POSITION_VARIATION_TRANSLATION_ID',
		referencedColumnName: 'POSITION_VARIATION_TRANSLATION_ID'
	})
	parentTranslation: PositionVariationTranslation

	@ManyToOne()
	@JoinColumn({
		name: 'PARENT_POSITION_ID',
		referencedColumnName: 'POSITION_ID'
	})
	parent: Position

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'parent'})
	children: Position[]

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'position'})
	factorPositions: FactorPosition[]

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'position'})
	variations: PositionVariation[]

}
