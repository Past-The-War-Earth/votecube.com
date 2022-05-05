import {MappedSuperclass} from '@airport/air-traffic-control'
import {ImmutableRow}     from './ImmutableRow'

/**
 * Marker class to disallow modification of server generated tables.
 */
@MappedSuperclass()
export abstract class SystemGeneratedRow
	extends ImmutableRow {

}
