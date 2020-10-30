import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	JoinColumn,
	ManyToOne,
	Table
}                              from '@airport/air-control'
import {PollRunCountry_Id}        from '../../../../types/poll/run/location/PollRunCountry'
import {Country} from '../../../location/Country'
import {PollRun} from '../PollRun'

@Entity()
@Table({name: 'POLL_COUNTRIES'})
// User information recorded at PollRun level
export class PollRunCountry {

	@GeneratedValue()
	@Id()
	@Column({name: 'POLL_COUNTRY_ID'})
	id: PollRunCountry_Id

	@ManyToOne()
	@JoinColumn({name: 'COUNTRY_ID', nullable: false})
	country: Country

	@ManyToOne()
	@JoinColumn({name: 'POLL_RUN_ID', nullable: false})
	run: PollRun

}
