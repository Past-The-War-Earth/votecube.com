import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	JoinColumn,
	ManyToOne,
	OneToMany,
	Table
}                           from '@airport/air-control'
import {
	County_Id,
	County_Name
}                           from '../../types/location/County'
import {SystemGeneratedRow} from '../infrastructure/row/SystemGeneratedRow'
import {CountyTown}         from './CountyTown'
import {State}              from './State'

@Entity()
@Table({
	name: 'COUNTIES'
})
export class County
	extends SystemGeneratedRow {

	@GeneratedValue()
	@Id()
	@Column({name: 'COUNTY_ID'})
	id: County_Id

	@ManyToOne()
	@JoinColumn({name: 'STATE_ID', nullable: false})
	state: State

	@Column({name: 'COUNTY_NAME', nullable: false})
	name: County_Name

	@OneToMany({mappedBy: 'county'})
	countyTowns: CountyTown

}
