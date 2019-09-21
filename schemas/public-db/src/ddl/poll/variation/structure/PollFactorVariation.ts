import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	JoinColumn,
	ManyToOne,
	OneToMany,
	Table
}                        from '@airport/air-control'
import {CascadeType}     from '@airport/ground-control'
import {FactorVariation} from '../../../factor/FactorVariation'
import {ImmutableRow}    from '../../../infrastructure/ImmutableRow'
import {PollVariation}   from '../PollVariation'

export type PollFactorVariation_Id = number

@Entity()
@Table({name: 'POLL_FACTOR_VARIATIONS'})
export class PollFactorVariation
	extends ImmutableRow {

	@GeneratedValue()
	@Id()
	@Column({name: 'POLL_FACTOR_VARIATION_ID'})
	id: PollFactorVariation_Id

	@ManyToOne()
	@JoinColumn({name: 'POLL_VARIATION_ID'})
	pollVariation: PollVariation

	@ManyToOne()
	@JoinColumn({name: 'FACTOR_VARIATION_ID', nullable: false})
	factorVariation: FactorVariation

	/**
	 * This is done at poll specific level to record the relationship between
	 * the polls, via which the Factor evolved.
	 */
	@ManyToOne()
	@JoinColumn({
		name: 'PARENT_POLL_FACTOR_VARIATION_ID',
		referencedColumnName: 'POLL_FACTOR_VARIATION_ID'
	})
	parent: PollFactorVariation

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'parent'})
	children: PollFactorVariation[]

}
