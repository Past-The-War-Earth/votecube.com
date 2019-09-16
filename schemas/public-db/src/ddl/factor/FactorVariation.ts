import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	JoinColumn,
	ManyToOne,
	Table
}                      from '@airport/air-control'
import {PollVariation} from '../poll/PollVariation'
import {Factor}        from './Factor'

export type FactorVariation_Id = number
export type FactorVariation_Name = number

@Entity()
@Table({name: 'FACTOR_VARIATION'})
export class FactorVariation {

	@Id()
	@GeneratedValue()
	@Column({name: 'FACTOR_VARIATION_ID'})
	id: FactorVariation_Id

	@Column({name: 'FACTOR_VARIATION_NAME'})
	name: FactorVariation_Name

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

}
