import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	JoinColumn,
	ManyToOne,
	OneToMany,
	Table
}                          from '@airport/air-traffic-control'
import {Factor_Id}         from '../../types/factor/Factor'
import {AgeSuitableRow}    from '../infrastructure/row/AgeSuitableRow'
import {PollRevision}      from '../poll/revision/PollRevision'
import {FactorTranslation} from './FactorTranslation'
import {FactorPosition}    from './position/FactorPosition'

@Entity()
@Table({name: 'FACTORS'})
export class Factor
	extends AgeSuitableRow {

	@GeneratedValue()
	@Id()
	@Column({name: 'FACTOR_ID'})
	id: Factor_Id

	@ManyToOne()
	@JoinColumn({name: 'POLL_REVISION_ID'})
	createdAtPollRevision: PollRevision

	@ManyToOne()
	@JoinColumn({
		name: 'PARENT_FACTOR_TRANSLATION_ID',
		referencedColumnName: 'FACTOR_TRANSLATION_ID'
	})
	parentTranslation: FactorTranslation

	@ManyToOne()
	@JoinColumn({name: 'PARENT_FACTOR_ID', referencedColumnName: 'FACTOR_ID'})
	parent: Factor

	@OneToMany({mappedBy: 'parent'})
	children: Factor[]

	@OneToMany({mappedBy: 'factor'})
	factorPositions: FactorPosition[]

	@OneToMany({mappedBy: 'factor'})
	translations: FactorTranslation[]

}
