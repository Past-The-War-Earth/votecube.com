import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	JoinColumn,
	ManyToOne,
	Table
}                               from '@airport/air-control'
import {ChosenPollRevision_Id}  from '../../../types/poll/revision/ChosenPollRevision'
import {SystemGeneratedRow}     from '../../infrastructure/row/SystemGeneratedRow'
import {ChosenPollRevisionType} from './ChosenPollRevisionType'
import {PollRevision}           from './PollRevision'

/**
 * Chosen are: Default (for entire poll), Most Something (Funny, Cynical, ...), etc.
 *
 * It is a Many-to-Many so that PollRevision can stay Immutable.
 */
@Entity()
@Table({name: 'CHOSEN_POLL_REVISIONS'})
export class ChosenPollRevision
	extends SystemGeneratedRow {

	@GeneratedValue()
	@Id()
	@Column({name: 'CHOSEN_POLL_REVISION_ID'})
	id: ChosenPollRevision_Id

	/*
	@ManyToOne()
	@JoinColumn({name: 'POLL_ID', nullable: false})
	poll: Poll
*/

	@ManyToOne()
	@JoinColumn({name: 'POLL_REVISION_ID', nullable: false})
	pollRevision: PollRevision

	@ManyToOne()
	@JoinColumn({name: 'CHOSEN_POLL_REVISION_TYPE_ID', nullable: false})
	type: ChosenPollRevisionType

	// (Theoretically) may be chosen for for the whole poll but not any
	// time-frame.  Therefore this field is nullable
	/*
	@ManyToOne()
	@JoinColumn({name: 'POLL_RUN_ID'})
	run: PollRun
	*/

}
