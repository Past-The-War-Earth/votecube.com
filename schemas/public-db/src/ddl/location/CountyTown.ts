import {
	Entity,
	Id,
	JoinColumn,
	ManyToOne,
	Table
}                           from '@airport/air-control'
import {SystemGeneratedRow} from '../infrastructure/SystemGeneratedRow'
import {County}             from './County'
import {Town}               from './Town'

/**
 * Composite Id - should never be referenced by id, only by the first part.
 */
@Entity()
@Table({
	name: 'COUNTY_TOWNS'
})
export class CountyTown
	extends SystemGeneratedRow {

	@Id()
	@ManyToOne()
	@JoinColumn({name: 'COUNTY_ID', nullable: false})
	county: County

	@Id()
	@ManyToOne()
	@JoinColumn({name: 'TOWN_ID', nullable: false})
	town: Town

}
