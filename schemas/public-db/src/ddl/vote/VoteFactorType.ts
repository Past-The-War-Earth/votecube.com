import {
	Column,
	DbString,
	Entity,
	Table
} from '@airport/air-control'
import {ReferenceRow} from '@airport/holding-pattern'

export type VoteFactorType_Id = number
export type VoteFactorType_Value = 'x' | 'y' | 'z'

@Entity()
@Table({name: 'VOTE_FACTOR_TYPES'})
export class VoteFactorType
	extends ReferenceRow {

	@Column({name: 'VOTE_FACTOR_TYPE_ID'})
	id: VoteFactorType_Id

	@Column({name: 'VOTE_FACTOR_TYPE_VALUE'})
	@DbString()
	value: VoteFactorType_Value

}
