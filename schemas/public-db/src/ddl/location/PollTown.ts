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
import {Town}         from './Town'

export type PollTown_Id = number

@Entity()
@Table({name: 'POLL_TOWNS'})
export class PollTown
	extends ChildRepoRow {

	@GeneratedValue()
	@Column({name: 'POLL_STATE_ID'})
	id: PollTown_Id

	@ManyToOne()
	@JoinColumn({name: 'POLL_ID', nullable: false})
	poll: Poll

	@ManyToOne()
	@JoinColumn({name: 'TOWN_ID', nullable: false})
	town: Town

}
