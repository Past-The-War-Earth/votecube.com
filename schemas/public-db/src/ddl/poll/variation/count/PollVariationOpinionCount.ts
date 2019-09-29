import {
	Column,
	Entity,
	GeneratedValue,
	JoinColumn,
	ManyToOne,
	Table
}                           from '@airport/air-control'
import {
	PollVariationOpinionCount_Count,
	PollVariationOpinionCount_Id
}                           from '../../../../types/poll/variation/count/PollVariationOpinionCount'
import {SystemGeneratedRow} from '../../../infrastructure/row/SystemGeneratedRow'
import {PollVariation}      from '../PollVariation'

/**
 * Count of all opinions.
 */
@Entity()
@Table({name: 'POLL_VARIATION_OPINION_COUNTS'})
export class PollVariationOpinionCount
	extends SystemGeneratedRow {

	@GeneratedValue()
	@Column({name: 'POLL_VARIATION_OPINION_COUNT_ID'})
	id: PollVariationOpinionCount_Id

	@Column({name: 'COUNT'})
	count: PollVariationOpinionCount_Count

	@ManyToOne()
	@JoinColumn({name: 'POLL_VARIATION_ID'})
	pollVariation: PollVariation

}
