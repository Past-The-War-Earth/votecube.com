import {MappedSuperclass} from '@airport/air-control'
import {DocumentId}       from '../../../types/common'
import {MutableRow}       from '../row/MutableRow'

@MappedSuperclass()
export abstract class MutableDocument
	extends MutableRow {

	docId: DocumentId

}
