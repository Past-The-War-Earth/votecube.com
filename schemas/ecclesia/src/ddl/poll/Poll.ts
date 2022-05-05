import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	JoinColumn,
	ManyToOne,
	OneToMany,
	Table
}                       from '@airport/air-traffic-control'
import {Poll_Id}        from '../../types/poll/Poll'
import {AgeSuitableRow} from '../infrastructure/row/AgeSuitableRow'
import {PollType}       from './PollType'
import {PollRevision}   from './revision/PollRevision'
import {PollRun}        from './run/PollRun'
import {Theme}          from './Theme'

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

	@OneToMany({mappedBy: 'poll'})
	runs: PollRun[]

	@OneToMany({mappedBy: 'poll'})
	revisions: PollRevision[]

}
