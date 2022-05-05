import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	JoinColumn,
	ManyToOne,
	OneToMany,
	Table
}                           from '@airport/air-traffic-control'
import {
	State_Id,
	State_Name
}                           from '../../types/location/State'
import {SystemGeneratedRow} from '../infrastructure/row/SystemGeneratedRow'
import {Country}            from './Country'
import {StateTown}          from './StateTown'

@Entity()
@Table({
	name: 'STATES'
})
export class State
	extends SystemGeneratedRow {

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
