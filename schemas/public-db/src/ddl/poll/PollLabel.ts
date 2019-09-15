import {
	Column,
	Entity,
	GeneratedValue,
	JoinColumn,
	ManyToOne,
	Table
}                     from '@airport/air-control'
import {ImmutableRow} from '../ImmutableRow'
import {Label}        from './Label'
import {
	Poll,
	Poll_Id
}                     from './Poll'

export type PollLabel_Id = number

@Entity()
@Table({name: 'POLL_LABELS'})
export class PollLabel
	extends ImmutableRow {

	@GeneratedValue()
	@Column({name: 'POLL_LABEL_ID'})
	id: PollLabel_Id

	@ManyToOne()
	@JoinColumn({name: 'LABEL_ID', nullable: false})
	label: Label

	@ManyToOne()
	@JoinColumn({name: 'POLL_ID', nullable: false})
	poll: Poll

}
