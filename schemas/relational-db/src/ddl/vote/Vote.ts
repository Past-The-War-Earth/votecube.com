import {
	Column,
	DbNumber,
	Entity,
	GeneratedValue,
	Id,
	JoinColumn,
	ManyToOne,
	OneToMany,
	Table
}                          from '@airport/air-control'
import {CascadeType}       from '@airport/ground-control'
import {PollRun}           from '../poll/run/PollRun'
import {Vote_Id}           from '../../types/vote/Vote'
import {ImmutableActorRow} from '../infrastructure/row/ImmutableActorRow'
import {VoteVersion}       from './VoteVersion'
import {VoteType}          from './VoteType'

@Entity()
@Table({name: 'VOTES'})
export class Vote
	extends ImmutableActorRow {

	@GeneratedValue()
	@Id()
	@Column({name: 'VOTE_ID'})
	id: Vote_Id

	/**
	 * Reserved for future use - let people not the the target group vote too (
	 * since they can see the poll) but track it differently
	 */
	@Column({name: 'VOTE_TYPE_ID'})
	@DbNumber()
	type: VoteType

	@ManyToOne()
	@JoinColumn({name: 'POLL_RUN_ID', nullable: false})
	run: PollRun

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'vote'})
	revisions: VoteVersion[]

}
