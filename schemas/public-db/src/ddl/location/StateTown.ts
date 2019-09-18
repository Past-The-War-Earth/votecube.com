import {
	Entity,
	Id,
	JoinColumn,
	ManyToOne,
	Table
}               from '@airport/air-control'
import {State} from './State'
import {Town}   from './Town'

/**
 * Composite Id - should never be referenced by id, only by the first part.
 */
@Entity()
@Table({
	name: 'STATE_TOWNS'
})
export class StateTown {

	@Id()
	@ManyToOne()
	@JoinColumn({name: 'STATE_ID', nullable: false})
	state: State

	@Id()
	@ManyToOne()
	@JoinColumn({name: 'TOWN_ID', nullable: false})
	town: Town

}
