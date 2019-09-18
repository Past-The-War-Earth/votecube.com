import {
	Entity,
	Id,
	JoinColumn,
	ManyToOne,
	Table
}                              from '@airport/air-control'
import {PollLocationTimeFrame} from '../PollLocationTimeFrame'
import {PollVariation}         from './PollVariation'

export type PollVariationLocationTimeFrame_Id = number

@Entity()
@Table({name: 'POLL_VARIATION_LOCATION_TIME_FRAMES'})
export class PollVariationLocationTimeFrame {

	@Id()
	id: PollVariationLocationTimeFrame_Id

	@ManyToOne()
	@JoinColumn({name: 'POLL_VARIATION_ID'})
	pollVariation: PollVariation

	@ManyToOne()
	@JoinColumn({name: 'POLL_LOCATION_TIME_FRAME_ID'})
	locationTimeFrame: PollLocationTimeFrame

}
