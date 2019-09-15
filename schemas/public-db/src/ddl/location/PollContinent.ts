import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	JoinColumn,
	ManyToOne,
	Table
}                  from '@airport/air-control'
import {Poll}      from '../poll/Poll'
import {Continent} from './Continent'

export type PollContinent_Id = number

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
