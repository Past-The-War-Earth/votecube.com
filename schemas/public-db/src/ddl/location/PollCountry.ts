import {
	Column,
	Entity,
	GeneratedValue,
	JoinColumn,
	ManyToOne,
	Table
}                     from '@airport/air-control'
import {ChildRepoRow} from '@airport/holding-pattern'
import {Poll}         from '../poll/Poll'
import {Country}      from './Country'

export type PollCountry_Id = number

@Entity()
@Table({name: 'POLL_COUNTRIES'})
export class PollCountry
	extends ChildRepoRow {

	@GeneratedValue()
	@Column({name: 'POLL_COUNTRY_ID'})
	id: PollCountry_Id

	@ManyToOne()
	@JoinColumn({name: 'COUNTRY_ID', nullable: false})
	country: Country

	@ManyToOne()
	@JoinColumn({name: 'POLL_ID', nullable: false})
	poll: Poll

}
