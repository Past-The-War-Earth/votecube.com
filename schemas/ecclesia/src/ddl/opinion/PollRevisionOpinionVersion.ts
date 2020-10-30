import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	JoinColumn,
	ManyToOne,
	OneToMany,
	Table
}                                              from '@airport/air-control'
import {CascadeType}                           from '@airport/ground-control'
import {PollRevisionOpinionVersion_Id}         from '../../types/opinion/PollRevisionOpinionVersion'
import {ImmutableRow}                          from '../infrastructure/row/ImmutableRow'
import {PollRevisionOpinion}                   from './PollRevisionOpinion'
import {PollRevisionOpinionVersionTranslation} from './translation/PollRevisionOpinionVersionTranslation'

/**
 * This the computed translation (based on most pinned factor revision).
 *
 * This record is mutable, it's only got IDs so that's OK.
 *
 * Belongs to PollRevisionOpinion - does not need user tracking
 */
@Entity()
@Table({name: 'POLL_REVISION_OPINION_VERSIONS'})
// User information recorded at PollRevisionOpinion level
export class PollRevisionOpinionVersion
	extends ImmutableRow {

	@GeneratedValue()
	@Id()
	@Column({name: 'POLL_REVISION_OPINION_VERSION_ID'})
	id: PollRevisionOpinionVersion_Id

	@ManyToOne()
	@JoinColumn({name: 'POLL_REVISION_OPINION_ID', nullable: false})
	pollRevisionOpinion: PollRevisionOpinion

	@ManyToOne()
	@JoinColumn({
		name: 'PARENT_POLL_REVISION_OPINION_VERSION_ID',
		referencedColumnName: 'POLL_REVISION_OPINION_VERSION_ID'
	})
	parent: PollRevisionOpinionVersion

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'parent'})
	children: PollRevisionOpinionVersion[]

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'pollOpinionVersion'})
	translations: PollRevisionOpinionVersionTranslation[]

}
