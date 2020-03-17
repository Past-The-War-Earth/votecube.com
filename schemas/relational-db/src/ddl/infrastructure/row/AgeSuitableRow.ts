import {
	Column,
	MappedSuperclass
}                          from '@airport/air-control'
import {AgeSuitability}    from '../../../types/common'
import {ImmutableActorRow} from './ImmutableActorRow'

@MappedSuperclass()
export abstract class AgeSuitableRow
	extends ImmutableActorRow {

	@Column({name: 'AGE_SUITABILITY', nullable: false})
	ageSuitability: AgeSuitability

}
