import {
	Column,
	MappedSuperclass
}                     from '@airport/air-control'
import {UpdatedAt}    from '../common'
import {ImmutableRow} from './ImmutableRow'

@MappedSuperclass()
export abstract class MutableRow
	extends ImmutableRow {

	@Column({name: 'UPDATED_AT'})
	updatedAt: UpdatedAt

}
