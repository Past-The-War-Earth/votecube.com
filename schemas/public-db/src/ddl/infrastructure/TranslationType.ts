import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	Table
} from '@airport/air-control'

export type TranslationType_Id = number
export type TranslationType_Code = number

/**
 * Internal Types like: Best As voted, Best composite
 * User specified types: Funny, Abbreviated, Alegorical
 */
@Entity()
@Table({name: 'TRANSLATION_TYPES'})
export class TranslationType {

	@Id()
	@GeneratedValue()
	@Column({name: 'TRANSLATION_TYPE_ID'})
	id: TranslationType_Id

	@Column({name: 'TRANSLATION_TYPE_CODE'})
	code: TranslationType_Code

}
