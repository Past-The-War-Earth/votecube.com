import {
	Column,
	Entity,
	GeneratedValue,
	JoinColumn,
	ManyToOne,
	Table
}                          from '@airport/air-control'
import {ImmutableActorRow} from '../../infrastructure/ImmutableActorRow'
import {PollLabel}         from './PollLabel'

export type UserPollLabel_Id = number

/**
 * All of the "Labelings" by users for a given Label (type) on a given poll.
 */
@Entity()
@Table({name: 'USER_POLL_LABELS'})
export class UserPollLabel
	extends ImmutableActorRow {

	@GeneratedValue()
	@Column({name: 'USER_POLL_LABEL_ID'})
	id: UserPollLabel_Id

	@ManyToOne()
	@JoinColumn({name: 'POLL_LABEL_ID', nullable: false})
	pollLabel: PollLabel

}
