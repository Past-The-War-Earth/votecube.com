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
import {Continent}              from './Continent'

export type PollContinent_Id = number

@Entity()
@Table({name: 'POLL_CONTINENTS'})
export class PollContinent
	extends ChildRepoRow {

	// @GeneratedValue()
	@TraditionalServerSeq()
	@Column({name: 'POLL_CONTINENT_ID'})
	id: PollContinent_Id

	@Column({name: 'POLL_ID'})
	pollId: Poll_Id

	@ManyToOne()
	@JoinColumn({name: 'CONTINENT_ID', nullable: false})
	continent: Continent

	@ManyToOne()
		// @JoinColumn({name: 'POLL_ID', nullable: false})
		poll: Poll

}
