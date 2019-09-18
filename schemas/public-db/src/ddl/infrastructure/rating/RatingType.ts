import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	Table
} from '@airport/air-control'
import {
	Rating_Description,
	Rating_Id,
	Rating_Name
} from './'


@Entity()
@Table({name: 'RATING_TYPES'})
export class RatingType {

	@Id()
	@GeneratedValue()
	@Column({name: 'RATING_ID'})
	id: Rating_Id

	@Column({name: 'RATING_TYPE', nullable: false})
	code: Rating_Name

	@Column({name: 'RATING_DESCRIPTION', nullable: false})
	description: Rating_Description

}
