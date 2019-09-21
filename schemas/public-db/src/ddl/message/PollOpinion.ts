import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	JoinColumn,
	ManyToOne,
	OneToMany,
	Table
}                               from '@airport/air-control'
import {CascadeType}            from '@airport/ground-control'
import {MutableActorRow}        from '../infrastructure/MutableActorRow'
import {Poll}                   from '../poll/Poll'
import {PollOpinionRatingCount} from './counts/PollOpinionRatingCount'
import {PollOpinionVersion}     from './PollOpinionVersion'

export type PollOpinion_Id = number
export type PollOpinion_NumberOfVersions = number

/**
 * This the computed translation (based on most pinned factor variation).
 *
 * This record is mutable, it's only got IDs so that's OK.
 */
@Entity()
@Table({name: 'POLL_OPINIONS'})
export class PollOpinion
	extends MutableActorRow {

	@GeneratedValue()
	@Id()
	@Column({name: 'POLL_OPINION_ID'})
	id: PollOpinion_Id

	// TODO: compute by batch job
	@Column({name: 'NUMBER_OF_VERSIONS'})
	numberOfVersions: PollOpinion_NumberOfVersions

	@ManyToOne()
	@JoinColumn({name: 'POLL_ID', nullable: false})
	poll: Poll

	@ManyToOne()
	@JoinColumn({
		name: 'FIRST_POLL_VERSION_ID',
		nullable: false,
		referencedColumnName: 'POLL_VERSION_ID'
	})
	firstVersion: PollOpinionVersion

	@ManyToOne()
	@JoinColumn({
		name: 'LAST_POLL_VERSION_ID',
		nullable: false,
		referencedColumnName: 'POLL_VERSION_ID'
	})
	lastVersion: PollOpinionVersion

	@ManyToOne()
	@JoinColumn({
		name: 'PARENT_POLL_OPINION_ID',
		nullable: false,
		referencedColumnName: 'POLL_OPINION_ID'
	})
	parent: PollOpinion

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'parent'})
	children: PollOpinion[]

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'pollOpinion'})
	versions: PollOpinionVersion[]

	@OneToMany({cascade: CascadeType.NONE, mappedBy: 'pollOpinion'})
	ratingCounts: PollOpinionRatingCount[]

}
