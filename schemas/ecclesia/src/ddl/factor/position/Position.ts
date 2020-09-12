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
import {Position_Id}         from '../../../types/factor/position/Position'
import {AgeSuitableRow} from '../../infrastructure/row/AgeSuitableRow'
import {PollRevision}      from '../../poll/revision/PollRevision'
import {FactorPosition}    from './FactorPosition'
import {PositionTranslation} from './PositionTranslation'

/**
 * This is the generic position records (not related to any poll).
 */
@Entity()
@Table({name: 'POSITIONS'})
export class Position
	extends AgeSuitableRow {

	@GeneratedValue()
	@Id()
	@Column({name: 'POSITION_ID'})
	id: Position_Id

	@ManyToOne()
	@JoinColumn({name: 'POLL_REVISION_ID'})
	createdAtPollRevision: PollRevision

	@ManyToOne()
	@JoinColumn({
		name: 'PARENT_POSITION_TRANSLATION_ID',
		referencedColumnName: 'POSITION_TRANSLATION_ID'
	})
	parentTranslation: PositionTranslation

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
	translations: PositionTranslation[]

}
