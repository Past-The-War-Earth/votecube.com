import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	JoinColumn,
	ManyToOne,
	OneToMany,
	Table
}                                   from '@airport/air-control'
import {CascadeType}                from '@airport/ground-control'
import {PositionVariation}          from '../factor/position/PositionVariation'
import {ImmutableRow}               from '../infrastructure/ImmutableRow'
import {Language}                   from '../infrastructure/Language'
import {VoteVariation}              from '../vote/VoteVariation'
import {PositionOpinionTranslation} from './PositionOpinionTranslation'
import {PositionOpinionRating}      from './user/PositionOpinionRating'

export type PositionOpinion_Id = number
export type PositionOpinion_Title = string
export type PositionOpinion_Text = string

/**
 * This the computed translation (based on most pinned position variation).
 *
 */
@Entity()
@Table({name: 'POSITION_OPINIONS'})
export class PositionOpinion
	extends ImmutableRow {

	@GeneratedValue()
	@Id()
	@Column({name: 'POSITION_OPINION_ID'})
	id: PositionOpinion_Id

	@ManyToOne()
	@JoinColumn({name: 'VOTE_VARIATION_ID', nullable: false})
	voteVariation: VoteVariation

	@ManyToOne()
	@JoinColumn({name: 'POSITION_VARIATION_ID', nullable: false})
	positionVariation: PositionVariation

	@ManyToOne()
	@JoinColumn({name: 'LANGUAGE_ID'})
	language: Language

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'positionOpinion'})
	ratings: PositionOpinionRating[]

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'positionOpinion'})
	translations: PositionOpinionTranslation[]

}
