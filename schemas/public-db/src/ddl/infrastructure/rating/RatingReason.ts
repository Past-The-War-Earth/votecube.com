import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	OneToMany,
	Table
}                                from '@airport/air-control'
import {CascadeType}             from '@airport/ground-control'
import {RatingReason_Id}         from '../../../types/infrastructure/rating/RatingReason'
import {SystemGeneratedRow}      from '../row/SystemGeneratedRow'
import {RatingReasonTranslation} from './RatingReasonTranslation'

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
