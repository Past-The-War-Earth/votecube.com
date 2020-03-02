import {
	Entity,
	Id,
	JoinColumn,
	ManyToOne,
	Table
}                                 from '@airport/air-control'
import {FactorTranslation}       from '../../../factor/FactorTranslation'
import {PollRevisionTranslation} from './PollRevisionTranslation'

/**
 * Needed because Factor Translations can be shared across polls and
 * poll revisions.
 */
@Entity()
@Table({name: 'POLL_REVISION_FACTOR_TRANSLATIONS'})
export class PollRevisionFactorTranslation {

	@Id()
	@ManyToOne()
	@JoinColumn({name: 'POLL_REVISION_TRANSLATION_ID'})
	pollRevisionTranslation: PollRevisionTranslation

	@Id()
	@ManyToOne()
	@JoinColumn({name: 'FACTOR_TRANSLATION_ID'})
	factorTranslation: FactorTranslation

}
