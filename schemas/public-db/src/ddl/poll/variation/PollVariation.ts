import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	JoinColumn,
	ManyToOne,
	OneToMany,
	Table
}                                    from '@airport/air-control'
import {CascadeType}                 from '@airport/ground-control'
import {PollOpinion}                 from '../../message/PollOpinion'
import {Poll}                        from '../Poll'
import {PollLocationTimeFrame}       from '../PollLocationTimeFrame'
import {ChosenPollTranslation}       from '../translation/ChosenPollTranslation'
import {PollVariationLabel}          from './PollVariationLabel'
import {PollVariationRating}         from './PollVariationRating'
import {PollFactorPositionVariation} from './structure/PollFactorPositionVariation'
import {PollFactorSkinVariation}     from './structure/PollFactorSkinVariation'
import {PollFactorVariation}         from './structure/PollFactorVariation'
import {PollPositionVariation}       from './structure/PollPositionVariation'
import {PollVariationTranslation}    from './translation/PollVariationTranslation'

export type PollVariation_Id = number

@Entity()
@Table({name: 'POLL_VARIATIONS'})
export class PollVariation {

	@Id()
	@GeneratedValue()
	@Column({name: 'POLL_VARIATION_ID'})
	id: PollVariation_Id

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
	ratings: PollVariationRating[]

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

}
