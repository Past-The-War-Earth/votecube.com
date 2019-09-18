import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	JoinColumn,
	ManyToOne,
	Table
}               from '@airport/air-control'
import {Poll}   from '../Poll'
import {County} from '../../location/County'

export type PollCounty_Id = number

@Entity()
@Table({name: 'POLL_COUNTIES'})
export class PollCounty {

	@GeneratedValue()
	@Id()
	@Column({name: 'POLL_COUNTY_ID'})
	id: PollCounty_Id

	@ManyToOne()
	@JoinColumn({name: 'COUNTY_ID', nullable: false})
	country: County

	@ManyToOne()
	@JoinColumn({name: 'POLL_ID', nullable: false})
	poll: Poll

}
