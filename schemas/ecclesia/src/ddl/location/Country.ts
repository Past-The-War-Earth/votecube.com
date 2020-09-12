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
	Country_Id,
	Country_Name
}                           from '../../types/location/Country'
import {SystemGeneratedRow} from '../infrastructure/row/SystemGeneratedRow'
import {Continent}          from './Continent'
import {CountryTown}        from './CountryTown'
import {State}              from './State'

@Entity()
@Table({
	name: 'COUNTRIES'
})
export class Country
	extends SystemGeneratedRow {

	@GeneratedValue()
	@Id()
	@Column({name: 'COUNTRY_ID'})
	id: Country_Id

	@ManyToOne()
	@JoinColumn({name: 'CONTINENT_ID', nullable: false})
	continent: Continent

	@Column({name: 'COUNTRY_NAME', nullable: false})
	name: Country_Name

	@OneToMany({mappedBy: 'COUNTRY_ID'})
	states: State[]

	@OneToMany({mappedBy: 'country'})
	countryTowns: CountryTown

}
