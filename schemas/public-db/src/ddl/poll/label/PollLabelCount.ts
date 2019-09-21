import {
	Column,
	Entity,
	GeneratedValue,
	JoinColumn,
	ManyToOne,
	Table
}                           from '@airport/air-control'
import {SystemGeneratedRow} from '../../infrastructure/SystemGeneratedRow'
import {PollLabel}          from './PollLabel'

export type PollLabelCount_Id = number
export type PollLabelCount_Count = number

@Entity()
@Table({name: 'POLL_LABEL_COUNTS'})
export class PollLabelCount
	extends SystemGeneratedRow {

	@GeneratedValue()
	@Column({name: 'POLL_LABEL_COUNT_ID'})
	id: PollLabelCount_Id

	@Column({name: 'COUNT'})
	count: PollLabelCount_Count

	@ManyToOne()
	@JoinColumn({name: 'POLL_LABEL_ID', nullable: false})
	pollLabel: PollLabel

}
