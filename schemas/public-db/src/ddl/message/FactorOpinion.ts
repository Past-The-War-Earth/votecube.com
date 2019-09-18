import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	JoinColumn,
	ManyToOne,
	OneToMany,
	Table
}                                 from '@airport/air-control'
import {CascadeType}              from '@airport/ground-control'
import {FactorVariation}          from '../factor/FactorVariation'
import {ImmutableRow}             from '../infrastructure/ImmutableRow'
import {Language}                 from '../infrastructure/Language'
import {VoteVariation}            from '../vote/VoteVariation'
import {FactorOpinionTranslation} from './FactorOpinionTranslation'
import {FactorOpinionRating}      from './user/FactorOpinionRating'

export type FactorOpinion_Id = number
export type FactorOpinion_Title = string
export type FactorOpinion_Text = string

/**
 * This the computed translation (based on most pinned factor variation).
 *
 */
@Entity()
@Table({name: 'FACTOR_OPINIONS'})
export class FactorOpinion
	extends ImmutableRow {

	@GeneratedValue()
	@Id()
	@Column({name: 'FACTOR_OPINION_ID'})
	id: FactorOpinion_Id

	@ManyToOne()
	@JoinColumn({name: 'VOTE_VARIATION_ID', nullable: false})
	voteVariation: VoteVariation

	@ManyToOne()
	@JoinColumn({name: 'FACTOR_VARIATION_ID', nullable: false})
	factorVariation: FactorVariation

	@ManyToOne()
	@JoinColumn({name: 'LANGUAGE_ID'})
	language: Language

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'factorOpinion'})
	ratings: FactorOpinionRating[]

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'factorOpinion'})
	translations: FactorOpinionTranslation[]

}
