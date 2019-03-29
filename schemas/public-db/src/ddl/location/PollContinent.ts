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
import {Continent}    from './Continent'

export type PollContinent_Id = number

@Entity()
@Table({name: 'POLL_CONTINENTS'})
export class PollContinent
	extends ChildRepoRow {

	@GeneratedValue()
	@Column({name: 'POLL_CONTINENT_ID'})
	id: PollContinent_Id

	@ManyToOne()
	@JoinColumn({name: 'CONTINENT_ID', nullable: false})
	continent: Continent

	@ManyToOne()
	@JoinColumn({name: 'POLL_ID', nullable: false})
	poll: Poll

}
