import {MappedSuperclass} from '@airport/air-control'
import {DocumentId}       from '../../../types/common'
import {MutableActorRow}  from '../row/MutableActorRow'

@MappedSuperclass()
export abstract class MutableActorDocument
	extends MutableActorRow {

	docId: DocumentId

}
