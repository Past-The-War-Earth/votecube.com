import {
	Column,
	MappedSuperclass
}                          from '@airport/air-control'
import {UpdatedAt}         from '../../../types/common'
import {ImmutableActorRow} from './ImmutableActorRow'

@MappedSuperclass()
export abstract class MutableActorRow
	extends ImmutableActorRow {

	@Column({name: 'UPDATED_AT'})
	updatedAt: UpdatedAt

}
