import {
	Column,
	MappedSuperclass
}                          from '@airport/air-control'
import {UpdatedAt}         from '../common'
import {ImmutableActorRow} from './ImmutableActorRow'

@MappedSuperclass()
export abstract class MutableActorRow
	extends ImmutableActorRow {

	@Column({name: 'UPDATED_AT'})
	updatedAt: UpdatedAt

}
