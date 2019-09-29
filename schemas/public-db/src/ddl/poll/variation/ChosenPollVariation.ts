import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	JoinColumn,
	ManyToOne,
	Table
}                                from '@airport/air-control'
import {ChosenPollVariation_Id}  from '../../../types/poll/variation/ChosenPollVariation'
import {SystemGeneratedRow}      from '../../infrastructure/row/SystemGeneratedRow'
import {PollLocationTimeFrame}   from '../locationTimeFrame/PollLocationTimeFrame'
import {Poll}                    from '../Poll'
import {ChosenPollVariationType} from './ChosenPollVariationType'
import {PollVariation}           from './PollVariation'

/**
 * Chosen are: Default (for entire poll), Most Something (Funny, Cynical, ...), etc.
 *
 * It is a Many-to-Many so that PollVariation can stay Immutable.
 */
@Entity()
@Table({name: 'CHOSEN_POLL_VARIATIONS'})
export class ChosenPollVariation
	extends SystemGeneratedRow {

	@GeneratedValue()
	@Id()
	@Column({name: 'CHOSEN_POLL_VARIATION_ID'})
	id: ChosenPollVariation_Id

	@ManyToOne()
	@JoinColumn({name: 'POLL_ID', nullable: false})
	poll: Poll

	@ManyToOne()
	@JoinColumn({name: 'POLL_VARIATION_ID', nullable: false})
	pollVariation: PollVariation

	@ManyToOne()
	@JoinColumn({name: 'CHOSEN_POLL_VARIATION_TYPE_ID', nullable: false})
	type: ChosenPollVariationType

	// (Theoretically) may be chosen for for the whole poll but not any
	// time-frame.  Therefore this field is nullable
	@ManyToOne()
	@JoinColumn({name: 'POLL_LOCATION_TIME_FRAME_ID'})
	locationTimeFrame: PollLocationTimeFrame

}
