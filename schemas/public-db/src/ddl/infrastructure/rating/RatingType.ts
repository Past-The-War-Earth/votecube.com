import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	Table
}                           from '@airport/air-control'
import {SystemGeneratedRow} from '../SystemGeneratedRow'

export type RatingType_Id = number;
export type RatingType_Code = string;
export type RatingType_Description = string;

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
