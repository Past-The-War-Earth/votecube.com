import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	JoinColumn,
	ManyToOne,
	Table
}                      from '@airport/air-control'
import {PollVariation} from '../poll/variation/PollVariation'
import {Factor}        from './Factor'

export type FactorVariation_Id = number
export type FactorVariation_Name = string
export type FactorVariation_Description = string

@Entity()
@Table({name: 'FACTOR_VARIATIONS'})
export class FactorVariation {

	@Id()
	@GeneratedValue()
	@Column({name: 'FACTOR_VARIATION_ID'})
	id: FactorVariation_Id

	@Column({name: 'FACTOR_VARIATION_NAME'})
	name: FactorVariation_Name

	@Column({name: 'FACTOR_VARIATION_DESCRIPTION'})
	description: FactorVariation_Description

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
