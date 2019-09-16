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
import {CascadeType}                 from '../../../../../../airport/apis/ground-control/lib'
import {FactorSkinVariation}         from '../factor/FactorSkinVariation'
import {FactorVariation}             from '../factor/FactorVariation'
import {PollFactorPositionVariation} from '../factor/position/PollFactorPositionVariation'
import {PositionVariation}           from '../factor/position/PositionVariation'
import {Language}                    from '../Language'
import {SuitabilityRating}           from '../SuitabilityRating'
import {Poll}                        from './Poll'

export type PollVariation_Id = number
export type PollVariation_Name = number

@Entity()
@Table({name: 'POLL_VARIATIONS'})
export class PollVariation {

	@Id()
	@GeneratedValue()
	@Column({name: 'POLL_VARIATION_ID'})
	id: PollVariation_Id

	@Column({name: 'POLL_VARIATION_DESCRIPTION'})
	name: PollVariation_Name

	@ManyToOne()
	@JoinColumn({name: 'SUITABILITY_RATING_ID', nullable: false})
	suitabilityRating: SuitabilityRating

	@ManyToOne()
	@JoinColumn({name: 'POLL_ID'})
	poll: Poll

	@ManyToOne()
	@JoinColumn({name: 'PARENT_POLL_VARIATION_ID', referencedColumnName: 'POLL_VARIATION_ID'})
	parentVariation: PollVariation

	@ManyToOne()
	@JoinColumn({name: 'POLL_LOCATION_TIME_FRAME_ID'})
	locationTimeFrame: PollVariation

	@ManyToOne()
	@JoinColumn({name: 'LANGUAGE_ID'})
	language: Language

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'pollVariation'})
	factorVariations: FactorVariation[]

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'pollVariation'})
	factorSkinVariations: FactorSkinVariation[]

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'pollVariation'})
	positionVariations: PositionVariation[]

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'pollVariation'})
	pollFactorPositionVariations: PollFactorPositionVariation[]

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'parentVariation'})
	childVariations: PollVariation[]

}
