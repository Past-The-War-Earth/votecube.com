import {
	Column,
	Entity,
	GeneratedValue,
	JoinColumn,
	ManyToOne,
	Table
}                              from '@airport/air-control'
import {PollVariationLabel_Id} from '../../../types/poll/variation/PollVariationLabel'
import {ImmutableActorRow}     from '../../infrastructure/row/ImmutableActorRow'
import {PollLocationTimeFrame} from '../locationTimeFrame/PollLocationTimeFrame'
import {Label}                 from './label/Label'
import {PollVariation}         from './PollVariation'

/**
 * A given Label can only be added to a given poll Variation once
 * (unlike ratings of which you can have many).
 */
@Entity()
@Table({name: 'POLL_VARIATION_LABELS'})
export class PollVariationLabel
	extends ImmutableActorRow {

	@GeneratedValue()
	@Column({name: 'POLL_VARIATION_LABEL_ID'})
	id: PollVariationLabel_Id

	@ManyToOne()
	@JoinColumn({name: 'LABEL_ID', nullable: false})
	label: Label

	@ManyToOne()
	@JoinColumn({name: 'POLL_VARIATION_ID', nullable: false})
	pollVariation: PollVariation

	@ManyToOne()
	@JoinColumn({name: 'POLL_LOCATION_TIME_FRAME_ID'})
	locationTimeFrame: PollLocationTimeFrame

}
