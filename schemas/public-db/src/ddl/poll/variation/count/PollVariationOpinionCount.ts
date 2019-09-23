import {
	Column,
	Entity,
	GeneratedValue,
	JoinColumn,
	ManyToOne,
	Table
}                                 from '@airport/air-control'
import {SystemGeneratedRow}       from '../../../infrastructure/SystemGeneratedRow'
import {PollVariation} from '../PollVariation'

export type PollVariationOpinionCount_Id = number
export type PollVariationOpinionCount_Count = number

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
