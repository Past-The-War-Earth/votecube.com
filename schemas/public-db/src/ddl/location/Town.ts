import {
	Column,
	Entity,
	Id,
	JoinColumn,
	ManyToOne,
	Table,
	TraditionalServerSeq
} from '@airport/air-control'
import {ReferenceRow} from '@airport/holding-pattern'
import {State}        from './State'

export type Town_Id = number
export type TownName = string

@Entity()
@Table({
	name: 'TOWNS'
})
export class Town
	extends ReferenceRow {

	// @GeneratedValue()
	@Id()
	@TraditionalServerSeq()
	@Column({name: 'TOWN_ID'})
	id: Town_Id

	@ManyToOne()
	@JoinColumn({name: 'STATE_ID', nullable: false})
	state: State

	@Column({name: 'TOWN_NAME', nullable: false})
	name: TownName

}
