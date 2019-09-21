import {
	Column,
	Entity,
	GeneratedValue,
	JoinColumn,
	ManyToOne,
	OneToMany,
	Table
}                           from '@airport/air-control'
import {CascadeType}        from '@airport/ground-control'
import {SystemGeneratedRow} from '../../infrastructure/SystemGeneratedRow'
import {Poll}               from '../Poll'
import {Label}              from './Label'
import {PollLabelCount}     from './PollLabelCount'
import {UserPollLabel}      from './UserPollLabel'

export type PollLabel_Id = number

/**
 * All of the Label (types) for a given poll
 */
@Entity()
@Table({name: 'POLL_LABELS'})
export class PollLabel
	extends SystemGeneratedRow {

	@GeneratedValue()
	@Column({name: 'POLL_LABEL_ID'})
	id: PollLabel_Id

	@ManyToOne()
	@JoinColumn({name: 'LABEL_ID', nullable: false})
	label: Label

	@ManyToOne()
	@JoinColumn({name: 'POLL_ID', nullable: false})
	poll: Poll

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'pollLabel'})
	userPollLabels: UserPollLabel[]

	@OneToMany({cascade: CascadeType.NONE, mappedBy: 'pollLabel'})
	counts: PollLabelCount[]

}
