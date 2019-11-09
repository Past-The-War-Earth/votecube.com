import {
	Column,
	DbString,
	Entity,
	Id,
	Table
}                           from '@airport/air-control'
import {
	VoteFactorType_Id,
	VoteFactorType_Value
}                           from '../../types/vote/VoteFactorType'
import {SystemGeneratedRow} from '../infrastructure/row/SystemGeneratedRow'

@Entity()
@Table({name: 'VOTE_FACTOR_TYPES'})
export class VoteFactorType
	extends SystemGeneratedRow {

	@Id()
	@Column({name: 'VOTE_FACTOR_TYPE_ID'})
	id: VoteFactorType_Id

	@Column({name: 'VOTE_FACTOR_TYPE_VALUE'})
	@DbString()
	value: VoteFactorType_Value

}
