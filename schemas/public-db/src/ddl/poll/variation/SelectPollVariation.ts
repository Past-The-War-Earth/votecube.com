import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	JoinColumn,
	ManyToOne,
	Table
}                                from '@airport/air-control'
import {ImmutableRow}            from '../../infrastructure/ImmutableRow'
import {Poll}                    from '../Poll'
import {SelectPollVariationType} from './SelectPollVariationType'

export type SelectPollVariation_Id = number

@Entity()
@Table({name: 'SELECT_POLL_VARIATION'})
export class SelectPollVariation
	extends ImmutableRow {

	@GeneratedValue()
	@Id()
	@Column({name: 'SELECT_POLL_VARIATION_ID'})
	id: SelectPollVariation_Id

	@ManyToOne()
	@JoinColumn({name: 'POLL_ID', nullable: false})
	poll: Poll

	@ManyToOne()
	@JoinColumn({name: 'SELECT_POLL_VARIATION_TYPE_ID', nullable: false})
	type: SelectPollVariationType

}
