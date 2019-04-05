import {
	Column,
	Entity,
	JoinColumn,
	ManyToOne,
	Table,
	TraditionalServerSeq
}                               from '@airport/air-control'
import {ChildRepoRow}           from '@airport/holding-pattern'
import {PollFactorPosition_Dir} from '../..'
import {
	Poll,
	Poll_Id
}                               from '../poll/Poll'
import {County}                 from './County'

export type PollCounty_Id = number

@Entity()
@Table({name: 'POLL_COUNTIES'})
export class PollCounty
	extends ChildRepoRow {

	// @GeneratedValue()
	@TraditionalServerSeq()
	@Column({name: 'POLL_COUNTY_ID'})
	id: PollCounty_Id

	@Column({name: 'POLL_ID'})
	pollId: Poll_Id

	@ManyToOne()
	@JoinColumn({name: 'COUNTY_ID', nullable: false})
	country: County

	@ManyToOne()
		// @JoinColumn({name: 'POLL_ID', nullable: false})
		poll: Poll

}
