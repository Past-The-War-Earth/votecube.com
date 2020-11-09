import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	JoinColumn,
	ManyToOne,
	OneToMany,
	Table
} from '@airport/air-control'
import {CascadeType}             from '@airport/ground-control'
import {Poll_Id}                 from '../../types/poll/Poll'
import {AgeSuitableRow}       from '../infrastructure/row/AgeSuitableRow'
import {PollRun}                 from './run/PollRun'
import {PollType}                from './PollType'
import {Theme}                   from './Theme'
import {PollRevision}       from './revision/PollRevision'

@Entity()
@Table({name: 'POLLS'})
export class Poll
	extends AgeSuitableRow {

	@GeneratedValue()
	@Column({name: 'POLL_ID'})
	@Id()
	id: Poll_Id

	@ManyToOne()
	@JoinColumn({name: 'THEME_ID', nullable: false})
	theme: Theme

	@ManyToOne()
	@JoinColumn({name: 'POLL_TYPE_ID', nullable: false})
	type: PollType

	@ManyToOne()
	@JoinColumn({
		name: 'PARENT_POLL_ID',
		referencedColumnName: 'POLL_ID'
	})
	parent: Poll

	@OneToMany({mappedBy: 'parent'})
	children: Poll[]

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'poll'})
	runs: PollRun[]

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'poll'})
	revisions: PollRevision[]

}
