import {
	Column,
	MappedSuperclass
}                  from '@airport/air-traffic-control'
import {CreatedAt} from '../../../types/common'

@MappedSuperclass()
export abstract class ImmutableRow {

	@Column({name: 'CREATED_AT'})
	createdAt: CreatedAt

}
