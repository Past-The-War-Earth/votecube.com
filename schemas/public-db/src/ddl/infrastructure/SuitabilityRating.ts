import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	JoinColumn,
	ManyToOne,
	Table
}                              from '@airport/air-control'
import {SuitabilityRatingType} from './SuitabilityRatingType'

export type SuitabilityRating_Id = number
export type SuitabilityRating_Name = string
export type SuitabilityRating_Description = string
export type SuitabilityRating_MaxAge = string

@Entity()
@Table({name: 'SUITABILITY_RATINGS'})
export class SuitabilityRating {

	@Id()
	@GeneratedValue()
	@Column({name: 'SUITABILITY_RATING_ID'})
	id: SuitabilityRating_Id

	@Column({name: 'SUITABILITY_RATING_CODE', nullable: false})
	code: SuitabilityRating_Name

	@Column({name: 'SUITABILITY_RATING_DESCRIPTION', nullable: false})
	description: SuitabilityRating_Description

	@Column({name: 'SUITABILITY_RATING_MIN_AGE', nullable: false})
	minAge: SuitabilityRating_MaxAge

	@ManyToOne()
	@JoinColumn({name: 'SUITABILITY_RATING_TYPE_ID'})
	type: SuitabilityRatingType

}
