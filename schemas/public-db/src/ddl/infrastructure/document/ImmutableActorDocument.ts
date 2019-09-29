import {MappedSuperclass}  from '@airport/air-control'
import {DocumentId}        from '../../../types/common'
import {ImmutableActorRow} from '../row/ImmutableActorRow'

@MappedSuperclass()
export abstract class ImmutableActorDocument
	extends ImmutableActorRow {

	docId: DocumentId

}
