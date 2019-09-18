import {
	Column,
	MappedSuperclass
}                  from '@airport/air-control'
import {CreatedAt} from '../common'

@MappedSuperclass()
export abstract class ImmutableRow {

	@Column({name: 'CREATED_AT'})
	createdAt: CreatedAt

}
