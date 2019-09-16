import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	JoinColumn,
	ManyToOne,
	Table
}                     from '@airport/air-control'
// import {ReferenceRow} from '@airport/holding-pattern'
import {County}       from './County'

export type Town_Id = number
export type TownName = string

@Entity()
@Table({
	name: 'TOWNS'
})
export class Town
	// extends ReferenceRow
{

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
