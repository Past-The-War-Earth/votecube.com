import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	JoinColumn,
	ManyToOne,
	Table
}                from '@airport/air-control'
import {Country} from '../../location/Country'
import {Poll}    from '../Poll'

export type PollCountry_Id = number

@Entity()
@Table({name: 'POLL_COUNTRIES'})
export class PollCountry {

	@GeneratedValue()
	@Id()
	@Column({name: 'POLL_COUNTRY_ID'})
	id: PollCountry_Id

	@ManyToOne()
	@JoinColumn({name: 'COUNTRY_ID', nullable: false})
	country: Country

	@ManyToOne()
	@JoinColumn({name: 'POLL_ID', nullable: false})
	poll: Poll

}
