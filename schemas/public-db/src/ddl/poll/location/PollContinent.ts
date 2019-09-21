import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	JoinColumn,
	ManyToOne,
	Table
}                  from '@airport/air-control'
import {Continent} from '../../location/Continent'
import {Poll}      from '../Poll'

export type PollContinent_Id = number

// @Singleton()
// @InsertOnly()
@Entity()
@Table({name: 'POLL_CONTINENTS'})
export class PollContinent {

	@GeneratedValue()
	@Id()
	@Column({name: 'POLL_CONTINENT_ID'})
	id: PollContinent_Id

	@ManyToOne()
	@JoinColumn({name: 'CONTINENT_ID', nullable: false})
	continent: Continent

	@ManyToOne()
	@JoinColumn({name: 'POLL_ID', nullable: false})
	poll: Poll

}
