import {
	Entity,
	Id,
	JoinColumn,
	ManyToOne,
	Table
}                                     from '@airport/air-control'
import {PositionVariationTranslation} from '../../../factor/position/PositionVariationTranslation'
import {PollVariationTranslation}     from './PollVariationTranslation'

@Entity()
@Table({name: 'POLL_VARIATION_POSITION_TRANSLATIONS'})
export class PollVariationPositionTranslation {

	@Id()
	@ManyToOne()
	@JoinColumn({name: 'POLL_VARIATION_TRANSLATION_ID'})
	pollVariationTranslation: PollVariationTranslation

	@Id()
	@ManyToOne()
	@JoinColumn({name: 'POSITION_VARIATION_TRANSLATION_ID'})
	positionVariationTranslation: PositionVariationTranslation

}
