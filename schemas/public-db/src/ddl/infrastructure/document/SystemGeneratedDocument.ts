import {MappedSuperclass}   from '@airport/air-control'
import {DocumentId}         from '../../../types/common'
import {SystemGeneratedRow} from '../row/SystemGeneratedRow'

/**
 * Marker class to disallow modification of server generated tables.
 */
@MappedSuperclass()
export abstract class SystemGeneratedDocument
	extends SystemGeneratedRow {

	docId: DocumentId

}
