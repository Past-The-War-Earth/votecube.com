import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	JoinColumn,
	ManyToOne,
	OneToMany,
	Table
}                                        from '@airport/air-control'
import {CascadeType}                     from '@airport/ground-control'
import {
	PollVariation_BackgroundColor,
	PollVariation_Id,
	PollVariation_TextColor
}                                        from '../../../types/poll/variation/PollVariation'
import {ImmutableActorDocument}          from '../../infrastructure/document/ImmutableActorDocument'
import {PollOpinion}                     from '../../opinion/PollOpinion'
import {PollLocationTimeFrame}           from '../locationTimeFrame/PollLocationTimeFrame'
import {Poll}                            from '../Poll'
import {ChosenPollTranslation}           from '../translation/ChosenPollTranslation'
import {UserPollVariationRating}         from '../user/UserPollVariationRating'
import {PollVariationOpinionCount}       from './count/PollVariationOpinionCount'
import {PollVariationOpinionRatingCount} from './count/PollVariationOpinionRatingCount'
import {PollVariationRatingCount}        from './count/PollVariationRatingCount'
import {PollVariationVoteCount}          from './count/PollVariationVoteCount'
import {PollVariationLabel}              from './PollVariationLabel'
import {PollFactorPositionVariation}     from './structure/PollFactorPositionVariation'
import {PollFactorSkinVariation}         from './structure/PollFactorSkinVariation'
import {PollFactorVariation}             from './structure/PollFactorVariation'
import {PollPositionVariation}           from './structure/PollPositionVariation'
import {PollVariationTranslation}        from './translation/PollVariationTranslation'

@Entity()
@Table({name: 'POLL_VARIATIONS'})
export class PollVariation
	extends ImmutableActorDocument {

	@Id()
	@GeneratedValue()
	@Column({name: 'POLL_VARIATION_ID'})
	id: PollVariation_Id

	@Column({name: 'BACKGROUND_COLOR_ID', nullable: false})
	backgroundColor: PollVariation_BackgroundColor

	@Column({name: 'TEXT_COLOR_ID', nullable: false})
	textColor: PollVariation_TextColor

	@ManyToOne()
	@JoinColumn({name: 'POLL_ID'})
	poll: Poll

	@ManyToOne()
	@JoinColumn({name: 'POLL_LOCATION_TIME_FRAME_ID'})
	createdAtLocationTimeFrame: PollLocationTimeFrame

	@ManyToOne()
	@JoinColumn({
		name: 'PARENT_POLL_VARIATION_ID',
		referencedColumnName: 'POLL_VARIATION_ID'
	})
	parent: PollVariation

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'parent'})
	children: PollVariation[]

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'pollVariation'})
	ratings: UserPollVariationRating[]

	@OneToMany({cascade: CascadeType.NONE, mappedBy: 'pollVariation'})
	ratingCounts: PollVariationRatingCount[]

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'pollVariation'})
	variationLabels: PollVariationLabel[]

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'pollVariation'})
	pollFactorPositionVariations: PollFactorPositionVariation[]

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'pollVariation'})
	factors: PollFactorVariation[]

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'pollVariation'})
	factorSkins: PollFactorSkinVariation[]

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'pollVariation'})
	positions: PollPositionVariation[]

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'pollVariation'})
	chosenTranslations: ChosenPollTranslation[]

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'pollVariation'})
	allTranslations: PollVariationTranslation[]

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'pollVariation'})
	opinions: PollOpinion[]

	@OneToMany({cascade: CascadeType.NONE, mappedBy: 'pollVariation'})
	opinionCounts: PollVariationOpinionCount[]

	@OneToMany({cascade: CascadeType.NONE, mappedBy: 'pollVariation'})
	opinionRatingCounts: PollVariationOpinionRatingCount[]

	@OneToMany({cascade: CascadeType.NONE, mappedBy: 'pollVariation'})
	voteCounts: PollVariationVoteCount[]

}
