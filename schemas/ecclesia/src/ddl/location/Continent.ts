import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	OneToMany,
	Table
}                           from '@airport/air-traffic-control'
import {
	Continent_Id,
	Continent_Name
}                           from '../../types/location/Continent'
import {SystemGeneratedRow} from '../infrastructure/row/SystemGeneratedRow'
import {Country}            from './Country'

@Entity()
@Table({
	name: 'CONTINENTS'
})
export class Continent
	extends SystemGeneratedRow {

	@GeneratedValue()
	@Id()
	@Column({name: 'CONTINENT_ID'})
	id: Continent_Id

	@Column({name: 'CONTINENT_NAME', nullable: false})
	name: Continent_Name

	@OneToMany({mappedBy: 'CONTINENT_ID'})
	countries: Country[]

}
