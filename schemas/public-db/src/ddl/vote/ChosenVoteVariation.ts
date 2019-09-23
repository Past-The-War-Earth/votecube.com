import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	JoinColumn,
	ManyToOne,
	Table
}                                from '@airport/air-control'
import {SystemGeneratedRow}      from '../infrastructure/SystemGeneratedRow'
import {ChosenVoteVariationType} from './ChosenVoteVariationType'
import {Vote}                    from './Vote'

export type ChosenVoteVariation_Id = number

@Entity()
@Table({name: 'CHOSEN_VOTE_VARIATIONS'})
export class ChosenVoteVariation
	extends SystemGeneratedRow {

	@GeneratedValue()
	@Id()
	@Column({name: 'CHOSEN_VOTE_VARIATION_ID'})
	id: ChosenVoteVariation_Id

	@ManyToOne()
	@JoinColumn({name: 'VOTE_ID', nullable: false})
	vote: Vote

	@ManyToOne()
	@JoinColumn({name: 'CHOSEN_VOTE_VARIATION_TYPE_ID', nullable: false})
	type: ChosenVoteVariationType

}
