import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	OneToMany,
	Table
}                                from '@airport/air-control'
import {CascadeType}             from '@airport/ground-control'
import {SystemGeneratedRow}      from '../SystemGeneratedRow'
import {RatingReasonTranslation} from './RatingReasonTranslation'

export type RatingReason_Id = number

@Entity()
@Table({name: 'RATING_REASONS'})
export class RatingReason
	extends SystemGeneratedRow {

	@Id()
	@GeneratedValue()
	@Column({name: 'RATING_REASON_ID'})
	id: RatingReason_Id

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'reason'})
	translations: RatingReasonTranslation[]

}
