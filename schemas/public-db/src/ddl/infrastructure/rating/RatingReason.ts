import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	OneToMany,
	Table
}                                           from '@airport/air-control'
import {CascadeType}                        from '../../../../../../../airport/apis/ground-control/lib'
import {RatingReasonTranslation} from './RatingReasonTranslation'

export type RatingReason_Id = number
export type RatingReason_Name = number

@Entity()
@Table({name: 'RATING_REASONS'})
export class RatingReason {

	@Id()
	@GeneratedValue()
	@Column({name: 'RATING_REASON_ID'})
	id: RatingReason_Id

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'reason'})
	translations: RatingReasonTranslation[]

}
