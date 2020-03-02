import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	JoinColumn,
	ManyToOne,
	Table
}                              from '@airport/air-control'
import {PollRunContinent_Id}      from '../../../../types/poll/run/location/PollRunContinent'
import {Continent} from '../../../location/Continent'
import {PollRun}   from '../PollRun'

// @Singleton()
// @InsertOnly()
@Entity()
@Table({name: 'POLL_CONTINENTS'})
export class PollRunContinent {

	@GeneratedValue()
	@Id()
	@Column({name: 'POLL_CONTINENT_ID'})
	id: PollRunContinent_Id

	@ManyToOne()
	@JoinColumn({name: 'CONTINENT_ID', nullable: false})
	continent: Continent

	@ManyToOne()
	@JoinColumn({name: 'POLL_RUN_ID', nullable: false})
	run: PollRun

}
