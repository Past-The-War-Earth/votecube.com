import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	Table
}                           from '@airport/air-traffic-control'
import {
	TranslationType_Code,
	TranslationType_Id
}                           from '../../types/infrastructure/TranslationType'
import {SystemGeneratedRow} from './row/SystemGeneratedRow'

/**
 * Translation isn't necessarily from one language to another.
 *
 * You can translate to a different style for instance. You could
 * make a very technical poll more layman sounding.  Or make something
 * funny, etc.
 *
 * Internal Types like: Default, Best As voted, Best composite
 * User specified types: Funny, Abbreviated, Alegorical
 */
@Entity()
@Table({name: 'TRANSLATION_TYPES'})
export class TranslationType extends SystemGeneratedRow {

	@Id()
	@GeneratedValue()
	@Column({name: 'TRANSLATION_TYPE_ID'})
	id: TranslationType_Id

	@Column({name: 'TRANSLATION_TYPE_CODE'})
	code: TranslationType_Code

}
