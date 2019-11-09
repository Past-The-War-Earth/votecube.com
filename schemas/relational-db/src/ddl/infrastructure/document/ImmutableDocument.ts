import {MappedSuperclass} from '@airport/air-control'
import {DocumentId}       from '../../../types/common'
import {ImmutableRow}     from '../row/ImmutableRow'

@MappedSuperclass()
export abstract class ImmutableDocument
	extends ImmutableRow {

	docId: DocumentId

}
