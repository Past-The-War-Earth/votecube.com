import {
	Column,
	JoinColumn,
	ManyToOne,
	MappedSuperclass
}                       from '@airport/air-control'
import {Actor}          from '../../user/Actor'
import {ImmutableRow}   from './ImmutableRow'

@MappedSuperclass()
export abstract class ImmutableActorRow
	extends ImmutableRow {

	@ManyToOne()
	@JoinColumn({name: 'ACTOR_ID', nullable: false})
	actor: Actor

}
