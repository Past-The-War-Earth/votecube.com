import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	OneToMany,
	Table
}                           from '@airport/air-control'
import {SystemGeneratedRow} from '../infrastructure/SystemGeneratedRow'
import {Country}            from './Country'

export type Continent_Id = number
export type Continent_Name = string

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
