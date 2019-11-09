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
import {PollFactorSkinVariation_Id} from '../../../../types/poll/variation/structure/PollFactorSkinVariation'
import {FactorSkinVariation}        from '../../../factor/FactorSkinVariation'
import {ImmutableRow}               from '../../../infrastructure/row/ImmutableRow'
import {PollVariation}              from '../PollVariation'

@Entity()
@Table({name: 'POLL_FACTOR_SKIN_VARIATIONS'})
export class PollFactorSkinVariation
	extends ImmutableRow {

	@GeneratedValue()
	@Id()
	@Column({name: 'POLL_FACTOR_SKIN_VARIATION_ID'})
	id: PollFactorSkinVariation_Id

	@ManyToOne()
	@JoinColumn({name: 'POLL_VARIATION_ID'})
	pollVariation: PollVariation

	@ManyToOne()
	@JoinColumn({name: 'FACTOR_SKIN_VARIATION_ID', nullable: false})
	factorSkinVariation: FactorSkinVariation

	/**
	 * This is done at poll specific level to record the relationship between
	 * the polls, via which the FactorSkin evolved.
	 */
	@ManyToOne()
	@JoinColumn({
		name: 'PARENT_POLL_FACTOR_SKIN_VARIATION_ID',
		referencedColumnName: 'POLL_FACTOR_SKIN_VARIATION_ID'
	})
	parent: PollFactorSkinVariation

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'parent'})
	children: PollFactorSkinVariation[]

}
