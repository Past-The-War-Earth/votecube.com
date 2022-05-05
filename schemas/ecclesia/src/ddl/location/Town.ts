import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	JoinColumn,
	ManyToOne,
	Table
}                           from '@airport/air-traffic-control'
import {
	Town_Id,
	TownName
}                           from '../../types/location/Town'
import {SystemGeneratedRow} from '../infrastructure/row/SystemGeneratedRow'
import {County}             from './County'

@Entity()
@Table({
	name: 'TOWNS'
})
export class Town
	extends SystemGeneratedRow {

	@GeneratedValue()
	@Id()
	@Column({name: 'TOWN_ID'})
	id: Town_Id

	@ManyToOne()
	@JoinColumn({name: 'COUNTY_ID', nullable: false})
	county: County

	@Column({name: 'TOWN_NAME', nullable: false})
	name: TownName

}
