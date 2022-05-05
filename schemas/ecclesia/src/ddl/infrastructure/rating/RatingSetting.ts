import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	JoinColumn,
	ManyToOne,
	Table
}                           from '@airport/air-traffic-control'
import {
	RatingSetting_Id,
	RatingSetting_Key,
	RatingSetting_Value
} from '../../../types/infrastructure/rating/RatingSetting'
import {Country}            from '../../location/Country'
import {SystemGeneratedRow} from '../row/SystemGeneratedRow'
import {Rating}             from './Rating'

/**
 * Different countries might have different age brackets for common
 * suitability ratings - record that here.
 */
@Entity()
@Table({name: 'RATING_SETTINGS'})
export class RatingSetting
	extends SystemGeneratedRow {

	@Id()
	@GeneratedValue()
	@Column({name: 'RATING_SETTING_ID'})
	id: RatingSetting_Id

	@ManyToOne()
	@JoinColumn({name: 'COUNTRY_ID'})
	country: Country

	@ManyToOne()
	@JoinColumn({name: 'RATING_ID'})
	rating: Rating

	// age, location, etc
	@Column({name: 'RATING_SETTING_KEY'})
	key: RatingSetting_Key

	// json
	@Column({name: 'RATING_SETTING_VALUE'})
	value: RatingSetting_Value

}
