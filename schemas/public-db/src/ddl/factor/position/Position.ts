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
import {ImmutableRow}        from '../../ImmutableRow'
import {FactorPosition}      from './FactorPosition'
import {PositionTranslation} from './PositionTranslation'
import {PositionVariation}   from './PositionVariation'

export type Position_Id = number
export type Position_Description = string

@Entity()
@Table({name: 'POSITIONS'})
export class Position
	extends ImmutableRow {

	@GeneratedValue()
	@Id()
	@Column({name: 'POSITION_ID'})
	id: Position_Id

	@Column({name: 'POSITION_DESCRIPTION', nullable: false})
	description: Position_Description

	@ManyToOne()
	@JoinColumn({name: 'PARENT_POSITION_ID', referencedColumnName: 'POSITION_ID'})
	parent: Position

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'position'})
	factorPositions: FactorPosition[]

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'position'})
	variations: PositionVariation[]

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'position'})
	translations: PositionTranslation[]

}
