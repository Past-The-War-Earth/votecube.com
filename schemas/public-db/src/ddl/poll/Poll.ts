import {
	Entity,
	GeneratedValue,
	Id,
	Table
}                                 from '@airport/air-control'
import {EntityIsRepositoryEntity} from '@airport/ground-control'
import {
	IPoll,
	PollId
}                                 from '@votecube/model'

@Entity()
@Table()
export class Poll
	extends AbstractRepositoryEntity
	implements IPoll {

	@Id()
	@GeneratedValue()
	id: PollId

	@ManyToOne()
	@JoinColumn({name: 'POLL_DESCRIPTION_ID', referencedColumnName: 'ID'})
	description: PollDescription

	@ManyToOne()
	@JoinColumn({name: 'CREATOR_VOTE_ID', referencedColumnName: 'ID'})
	creatorVote: Vote[]

	@ManyToOne()
	@JoinColumn({name: 'PARENT_POLL_ID', referencedColumnName: 'ID'})
	parentPoll: Poll

	@ManyToOne()
	@JoinColumn({name: 'LOCATION_ID', referencedColumnName: 'ID'})
	location: Location

	@OneToMany({mappedBy: 'parentPoll'})
	childPolls: Poll[]

	@OneToMany({mappedBy: 'poll'})
	groupings: PollGrouping

}