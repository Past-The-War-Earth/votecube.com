import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	JoinColumn,
	ManyToOne,
	Table
}                           from '@airport/air-control'
import {Country}            from '../../location/Country'
import {SystemGeneratedRow} from '../SystemGeneratedRow'
import {Rating}             from './Rating'

export type RatingSetting_Id = number
export type RatingSetting_Key = string
export type RatingSetting_Value = string

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
