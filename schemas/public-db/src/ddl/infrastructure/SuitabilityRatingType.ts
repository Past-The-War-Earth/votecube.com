import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	Table
} from '@airport/air-control'
import {
	SuitabilityRating_Description,
	SuitabilityRating_Id,
	SuitabilityRating_Name
} from './SuitabilityRating'


@Entity()
@Table({name: 'SUITABILITY_RATING_TYPES'})
export class SuitabilityRatingType {

	@Id()
	@GeneratedValue()
	@Column({name: 'SUITABILITY_RATING_ID'})
	id: SuitabilityRating_Id

	@Column({name: 'SUITABILITY_RATING_TYPE', nullable: false})
	code: SuitabilityRating_Name

	@Column({name: 'SUITABILITY_RATING_DESCRIPTION', nullable: false})
	description: SuitabilityRating_Description

}
