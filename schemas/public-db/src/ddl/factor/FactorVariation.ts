import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	JoinColumn,
	ManyToOne,
	OneToMany,
	Table
}                          from '@airport/air-control'
import {CascadeType}       from '@airport/ground-control'
import {ImmutableActorRow} from '../infrastructure/ImmutableActorRow'
import {PollVariation}     from '../poll/variation/PollVariation'
import {Factor}            from './Factor'

export type FactorVariation_Id = number

@Entity()
@Table({name: 'FACTOR_VARIATIONS'})
export class FactorVariation
	extends ImmutableActorRow {

	@Id()
	@GeneratedValue()
	@Column({name: 'FACTOR_VARIATION_ID'})
	id: FactorVariation_Id

	@ManyToOne()
	@JoinColumn({name: 'POLL_VARIATION_ID'})
	pollVariation: PollVariation

	@ManyToOne()
	@JoinColumn({name: 'FACTOR_ID'})
	factor: Factor

	@ManyToOne()
	@JoinColumn({
		name: 'PARENT_FACTOR_VARIATION_ID',

		referencedColumnName: 'FACTOR_VARIATION_ID'
	})
	parent: FactorVariation

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'parent'})
	children: FactorVariation[]

}
