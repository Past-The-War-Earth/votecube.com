import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	JoinColumn,
	ManyToOne,
	OneToMany,
	Table
} from '@airport/air-control'
import {ReferenceRow} from '@airport/holding-pattern'
import {State}        from './State'
import {Town}         from './Town'

export type County_Id = number
export type County_Name = string

@Entity()
@Table({
	name: 'COUNTIES'
})
export class County
	extends ReferenceRow {

	@GeneratedValue()
	@Column({name: 'COUNTY_ID'})
	id: County_Id

	@ManyToOne()
	@JoinColumn({name: 'STATE_ID', nullable: false})
	state: State

	@Column({name: 'COUNTY_NAME', nullable: false})
	name: County_Name

	@OneToMany({mappedBy: 'TOWN_ID'})
	states: Town[]

}
