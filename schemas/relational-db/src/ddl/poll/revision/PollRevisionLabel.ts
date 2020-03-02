import {
	Column,
	Entity,
	GeneratedValue,
	JoinColumn,
	ManyToOne,
	Table
}                              from '@airport/air-control'
import {PollRevisionLabel_Id} from '../../../types/poll/revision/PollRevisionLabel'
import {ImmutableActorRow}     from '../../infrastructure/row/ImmutableActorRow'
import {PollRun} from '../run/PollRun'
import {Label}        from './label/Label'
import {PollRevision} from './PollRevision'

/**
 * A given Label can only be added to a given poll Revision once
 * (unlike ratings of which you can have many).
 */
@Entity()
@Table({name: 'POLL_REVISION_LABELS'})
export class PollRevisionLabel
	extends ImmutableActorRow {

	@GeneratedValue()
	@Column({name: 'POLL_REVISION_LABEL_ID'})
	id: PollRevisionLabel_Id

	@ManyToOne()
	@JoinColumn({name: 'LABEL_ID', nullable: false})
	label: Label

	@ManyToOne()
	@JoinColumn({name: 'POLL_REVISION_ID', nullable: false})
	pollRevision: PollRevision

	@ManyToOne()
	@JoinColumn({name: 'POLL_RUN_ID'})
	run: PollRun

}
