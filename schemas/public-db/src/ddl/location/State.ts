import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	JoinColumn,
	ManyToOne,
	OneToMany,
	Table
}                  from '@airport/air-control'
// import {ReferenceRow} from '@airport/holding-pattern'
import {Country}   from './Country'
import {StateTown} from './StateTown'

export type State_Id = number
export type State_Name = string

@Entity()
@Table({
	name: 'STATES'
})
export class State
	// extends ReferenceRow
{

	@GeneratedValue()
	@Id()
	@Column({name: 'STATE_ID'})
	id: State_Id

	@ManyToOne()
	@JoinColumn({name: 'COUNTRY_ID', nullable: false})
	country: Country

	@Column({name: 'STATE_NAME', nullable: false})
	name: State_Name

	@OneToMany({mappedBy: 'state'})
	stateTowns: StateTown

}
