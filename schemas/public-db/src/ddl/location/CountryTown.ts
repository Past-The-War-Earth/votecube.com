import {
	Entity,
	Id,
	JoinColumn,
	ManyToOne,
	Table
}                from '@airport/air-control'
import {Country} from './Country'
import {Town}    from './Town'

/**
 * Composite Id - should never be referenced by id, only by the first part.
 */
@Entity()
@Table({
	name: 'COUNTRY_TOWNS'
})
export class CountryTown {


	@ManyToOne()
	@JoinColumn({name: 'COUNTRY_ID', nullable: false})
	country: Country

	@Id()
	@ManyToOne()
	@JoinColumn({name: 'TOWN_ID', nullable: false})
	town: Town

}
