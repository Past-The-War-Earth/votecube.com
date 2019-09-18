import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	JoinColumn,
	ManyToOne,
	Table
}                                from '@airport/air-control'
import {ImmutableRow}            from '../infrastructure/ImmutableRow'
import {SelectVoteVariationType} from './SelectVoteVariationType'
import {Vote}                    from './Vote'

export type SelectVoteVariation_Id = number

@Entity()
@Table({name: 'SELECT_VOTE_VARIATION'})
export class SelectVoteVariation
	extends ImmutableRow {

	@GeneratedValue()
	@Id()
	@Column({name: 'SELECT_VOTE_VARIATION_ID'})
	id: SelectVoteVariation_Id

	@ManyToOne()
	@JoinColumn({name: 'VOTE_ID', nullable: false})
	vote: Vote

	@ManyToOne()
	@JoinColumn({name: 'SELECT_VOTE_VARIATION_TYPE_ID', nullable: false})
	type: SelectVoteVariationType

}
