import {
	Entity,
	Id,
	JoinColumn,
	ManyToOne,
	Table
}                                 from '@airport/air-control'
import {PositionTranslation}     from '../../../factor/position/PositionTranslation'
import {PollRevisionTranslation} from './PollRevisionTranslation'

/**
 * Needed because Position Translations can be shared across polls and
 * poll revisions.
 */
@Entity()
@Table({name: 'POLL_REVISION_POSITION_TRANSLATIONS'})
export class PollRevisionPositionTranslation {

	@Id()
	@ManyToOne()
	@JoinColumn({name: 'POLL_REVISION_TRANSLATION_ID'})
	pollRevisionTranslation: PollRevisionTranslation

	@Id()
	@ManyToOne()
	@JoinColumn({name: 'POSITION_TRANSLATION_ID'})
	positionTranslation: PositionTranslation

}
