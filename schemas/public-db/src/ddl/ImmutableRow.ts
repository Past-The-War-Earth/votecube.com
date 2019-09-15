import {
	Column,
	MappedSuperclass
} from '@airport/air-control'

@MappedSuperclass()
export abstract class ImmutableRow {

	@Column({name: 'CREATED_AT'})
	createdAt: Date

}
