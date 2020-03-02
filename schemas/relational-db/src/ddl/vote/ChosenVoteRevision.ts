import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	JoinColumn,
	ManyToOne,
	Table
}                                from '@airport/air-control'
import {ChosenVoteRevision_Id}  from '../../types/vote/ChosenVoteRevision'
import {SystemGeneratedRow}      from '../infrastructure/row/SystemGeneratedRow'
import {ChosenVoteRevisionType} from './ChosenVoteRevisionType'
import {Vote}                    from './Vote'

@Entity()
@Table({name: 'CHOSEN_VOTE_REVISIONS'})
export class ChosenVoteRevision
	extends SystemGeneratedRow {

	@GeneratedValue()
	@Id()
	@Column({name: 'CHOSEN_VOTE_REVISION_ID'})
	id: ChosenVoteRevision_Id

	@ManyToOne()
	@JoinColumn({name: 'VOTE_ID', nullable: false})
	vote: Vote

	@ManyToOne()
	@JoinColumn({name: 'CHOSEN_VOTE_REVISION_TYPE_ID', nullable: false})
	type: ChosenVoteRevisionType

}
