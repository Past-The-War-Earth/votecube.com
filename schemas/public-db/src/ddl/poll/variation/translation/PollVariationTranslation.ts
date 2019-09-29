import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	JoinColumn,
	ManyToOne,
	OneToMany,
	Table
}                                                   from '@airport/air-control'
import {CascadeType}                                from '@airport/ground-control'
import {
	PollVariationTranslation_Description,
	PollVariationTranslation_Id,
	PollVariationTranslation_Name
}                                                   from '../../../../types/poll/variation/translation/PollVariationTranslation'
import {Language}                                   from '../../../infrastructure/Language'
import {ImmutableActorRow}                          from '../../../infrastructure/row/ImmutableActorRow'
import {TranslationType}                            from '../../../infrastructure/TranslationType'
import {PollLocationTimeFrame}                      from '../../locationTimeFrame/PollLocationTimeFrame'
import {UserPollVariationTranslationRating}         from '../../user/UserPollVariationTranslationRating'
import {PollVariation}                              from '../PollVariation'
import {PollVariationTranslationOpinionCount}       from './count/PollVariationTranslationOpinionCount'
import {PollVariationTranslationOpinionRatingCount} from './count/PollVariationTranslationOpinionRatingCount'
import {PollVariationTranslationRatingCount}        from './count/PollVariationTranslationRatingCount'
import {PollVariationTranslationVoteCount}          from './count/PollVariationTranslationVoteCount'
import {PollVariationFactorTranslation}             from './PollVariationFactorTranslation'
import {PollVariationPositionTranslation}           from './PollVariationPositionTranslation'

/**
 * This the translation of a given poll variation.
 *
 */
@Entity()
@Table({name: 'POLL_VARIATION_TRANSLATIONS'})
export class PollVariationTranslation
	extends ImmutableActorRow {

	@Id()
	@GeneratedValue()
	@Column({name: 'POLL_VARIATION_TRANSLATION_ID'})
	id: PollVariationTranslation_Id

	@ManyToOne()
	@JoinColumn({name: 'POLL_VARIATION_ID'})
	pollVariation: PollVariation

	@ManyToOne()
	@JoinColumn({name: 'LANGUAGE_ID'})
	language: Language

	@Column({name: 'POLL_NAME'})
	name: PollVariationTranslation_Name

	@Column({name: 'POLL_DESCRIPTION'})
	description: PollVariationTranslation_Description

	@ManyToOne()
	@JoinColumn({name: 'TRANSLATION_TYPE_ID'})
	type: TranslationType

	@ManyToOne()
	@JoinColumn({name: 'POLL_LOCATION_TIME_FRAME_ID'})
	createdAtLocationTimeFrame: PollLocationTimeFrame

	@ManyToOne()
	@JoinColumn({
		name: 'PARENT_POLL_VARIATION_TRANSLATION_ID',
		referencedColumnName: 'POLL_VARIATION_TRANSLATION_ID'
	})
	parent: PollVariationTranslation

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'parent'})
	children: PollVariationTranslation[]

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'translation'})
	ratings: UserPollVariationTranslationRating[]

	@OneToMany({cascade: CascadeType.NONE, mappedBy: 'pollVariationTranslation'})
	ratingCounts: PollVariationTranslationRatingCount[]

	@OneToMany({cascade: CascadeType.NONE, mappedBy: 'pollVariationTranslation'})
	factors: PollVariationFactorTranslation[]

	@OneToMany({cascade: CascadeType.NONE, mappedBy: 'pollVariationTranslation'})
	positions: PollVariationPositionTranslation[]

	@OneToMany({cascade: CascadeType.NONE, mappedBy: 'pollVariationTranslation'})
	opinionCounts: PollVariationTranslationOpinionCount[]

	@OneToMany({cascade: CascadeType.NONE, mappedBy: 'pollVariationTranslation'})
	opinionRatingCounts: PollVariationTranslationOpinionRatingCount[]

	@OneToMany({cascade: CascadeType.NONE, mappedBy: 'pollVariationTranslation'})
	voteCounts: PollVariationTranslationVoteCount[]

}
