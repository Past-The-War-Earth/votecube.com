import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	Table
}                           from '@airport/air-control'
import {
	RatingType_Code,
	RatingType_Description,
	RatingType_Id
}                           from '../../../types/infrastructure/rating/RatingType'
import {SystemGeneratedRow} from '../row/SystemGeneratedRow'

@Entity()
@Table({name: 'RATING_TYPES'})
export class RatingType
	extends SystemGeneratedRow {

	@Id()
	@GeneratedValue()
	@Column({name: 'RATING_TYPE_ID'})
	id: RatingType_Id

	@Column({name: 'RATING_TYPE_CODE', nullable: false})
	code: RatingType_Code

	@Column({name: 'RATING_TYPE_DESCRIPTION', nullable: false})
	description: RatingType_Description

}
