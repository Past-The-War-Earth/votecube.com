import {
	Column,
	MappedSuperclass
}                     from '@airport/air-traffic-control'
import {UpdatedAt}    from '../../../types/common'
import {ImmutableRow} from './ImmutableRow'

@MappedSuperclass()
export abstract class MutableRow
	extends ImmutableRow {

	@Column({name: 'UPDATED_AT'})
	updatedAt: UpdatedAt

}
